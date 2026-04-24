import { gql } from 'graphql-request'

export const GET_PRODUCTS = gql`
  query GetProducts($first: Int = 20, $after: String, $where: ProductWhereArgs) {
    products(first: $first, after: $after, where: $where) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            id
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        productCategories {
          nodes {
            id
            name
            slug
          }
        }
        acf {
          talla
          tipoTela
          estado
          color
          marca
          genero
          precio
        }
      }
    }
  }
`

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: String = "") {
    products(where: { name: $slug }, first: 1) {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            id
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        galleryImages {
          nodes {
            id
            sourceUrl
            altText
          }
        }
        productCategories {
          nodes {
            id
            name
            slug
          }
        }
        acf {
          talla
          tipoTela
          estado
          color
          marca
          genero
          precio
        }
      }
    }
  }
`

export const GET_CATEGORIES = gql`
  query GetCategories {
    productCategories(first: 50, where: { hideEmpty: true }) {
      nodes {
        id
        name
        slug
        description
        count
        image {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

export const SEARCH_PRODUCTS = gql`
  query SearchProducts($search: String, $category: String, $first: Int = 20) {
    products(
      first: $first
      where: {
        search: $search
        category: $category
      }
    ) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        acf {
          talla
          estado
          color
          marca
        }
      }
    }
  }
`
