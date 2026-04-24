import { defineStore } from 'pinia'
import type { Product, Category, SearchFilter } from '~/types/product'
import { GET_PRODUCTS, GET_CATEGORIES, SEARCH_PRODUCTS } from '~/graphql/queries'
import { graphQLQuery } from '~/utils/graphql'

interface ProductState {
  products: Product[]
  categories: Category[]
  loading: boolean
  error: string | null
  filters: SearchFilter
  pagination: {
    hasNextPage: boolean
    endCursor: string | null
  }
}

export const useProductStore = defineStore('product', {
  state: (): ProductState => ({
    products: [],
    categories: [],
    loading: false,
    error: null,
    filters: {},
    pagination: {
      hasNextPage: false,
      endCursor: null
    }
  }),
  
  getters: {
    getFilteredProducts: (state) => {
      let filtered = state.products
      
      if (state.filters.category) {
        filtered = filtered.filter(p => 
          p.category === state.filters.category
        )
      }
      
      if (state.filters.query) {
        const query = state.filters.query.toLowerCase()
        filtered = filtered.filter(p => 
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
        )
      }
      
      return filtered
    }
  },
  
  actions: {
    async fetchProducts(first: number = 20) {
      this.loading = true
      this.error = null
      
      try {
        const response: any = await graphQLQuery(GET_PRODUCTS, { first })
        
        this.products = response.products.nodes.map((node: any) => this.normalizeProduct(node))
        this.pagination.hasNextPage = response.products.pageInfo.hasNextPage
        this.pagination.endCursor = response.products.pageInfo.endCursor
      } catch (err: any) {
        this.error = err.message || 'Error fetching products'
        console.error('Error fetching products:', err)
      } finally {
        this.loading = false
      }
    },
    
    async fetchCategories() {
      this.loading = true
      this.error = null
      
      try {
        const response: any = await graphQLQuery(GET_CATEGORIES)
        this.categories = response.productCategories.nodes.map((node: any) => ({
          id: node.id,
          name: node.name,
          slug: node.slug,
          description: node.description,
          count: node.count,
          image: node.image?.node || null
        }))
      } catch (err: any) {
        this.error = err.message || 'Error fetching categories'
        console.error('Error fetching categories:', err)
      } finally {
        this.loading = false
      }
    },
    
    async searchProducts(searchParams: SearchFilter) {
      this.loading = true
      this.error = null
      this.filters = searchParams
      
      try {
        const response: any = await graphQLQuery(SEARCH_PRODUCTS, {
          search: searchParams.query || '',
          category: searchParams.category || '',
          first: 20
        })
        
        this.products = response.products.nodes.map((node: any) => this.normalizeProduct(node))
      } catch (err: any) {
        this.error = err.message || 'Error searching products'
        console.error('Error searching products:', err)
      } finally {
        this.loading = false
      }
    },
    
    setFilters(filters: SearchFilter) {
      this.filters = { ...this.filters, ...filters }
    },
    
    clearFilters() {
      this.filters = {}
    },
    
    normalizeProduct(node: any): Product {
      return {
        id: node.id,
        title: node.title,
        slug: node.slug,
        description: node.content || '',
        category: node.productCategories?.nodes?.[0]?.slug || 'ropa-americana',
        images: node.featuredImage ? [{
          id: node.featuredImage.node.id,
          url: node.featuredImage.node.sourceUrl,
          alt: node.featuredImage.node.altText,
          width: node.featuredImage.node.mediaDetails?.width || 800,
          height: node.featuredImage.node.mediaDetails?.height || 800
        }] : [],
        metadata: {
          talla: node.acf?.talla,
          tipoTela: node.acf?.tipoTela,
          estado: node.acf?.estado,
          color: node.acf?.color,
          marca: node.acf?.marca,
          genero: node.acf?.genero
        },
        price: node.acf?.precio,
        status: 'available',
        createdAt: node.date || '',
        updatedAt: node.modified || ''
      }
    }
  }
})
