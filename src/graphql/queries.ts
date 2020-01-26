// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstname
    lastname
    email
    profilePicture
    isRestaurantOwnser
    restaurants {
      items {
        id
        addressLine1
        addressLine2
        websiteAddress
        phoneNumber
        RestaurantMenus {
          items {
            id
            menuType
            menuPortion
            menuName
            menuDescription
            menuPrice
            menuPicture
          }
          nextToken
        }
        restaurantName
        city
        state
        zipcode
        country
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstname
      lastname
      email
      profilePicture
      isRestaurantOwnser
      restaurants {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getRestaurant = `query GetRestaurant($id: ID!) {
  getRestaurant(id: $id) {
    id
    addressLine1
    addressLine2
    websiteAddress
    phoneNumber
    restaurantName
    city
    state
    zipcode
    country
    user {
      id
      firstname
      lastname
      email
      profilePicture
      isRestaurantOwnser
      restaurants {
        nextToken
      }
    }
    RestaurantMenus {
      items {
        id
        menuType
        menuPortion
        menuName
        menuDescription
        menuPrice
        menuPicture
      }
      nextToken
    }
  }
}
`;
export const listRestaurants = `query ListRestaurants(
  $filter: ModelRestaurantFilterInput
  $limit: Int
  $nextToken: String
) {
  listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      addressLine1
      addressLine2
      websiteAddress
      phoneNumber
      restaurantName
      RestaurantMenus {
        items {
          id
          menuType
          menuPortion
          menuName
          menuDescription
          menuPrice
          menuPicture
        }
        nextToken
      }
      city
      state
      zipcode
      country
      user {
        id
        firstname
        lastname
        email
        profilePicture
        isRestaurantOwnser
      }
      RestaurantMenus {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getRestaurantMenu = `query GetRestaurantMenu($id: ID!) {
  getRestaurantMenu(id: $id) {
    id
    menuType
    menuPortion
    menuName
    menuDescription
    menuPrice
    menuPicture
    restaurant {
      id
      addressLine1
      addressLine2
      websiteAddress
      phoneNumber
      restaurantName
      city
      state
      zipcode
      country
      user {
        id
        firstname
        lastname
        email
        profilePicture
        isRestaurantOwnser
      }
      RestaurantMenus {
        nextToken
      }
    }
  }
}
`;
export const listRestaurantMenus = `query ListRestaurantMenus(
  $filter: ModelRestaurantMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listRestaurantMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      menuType
      menuPortion
      menuName
      menuDescription
      menuPrice
      menuPicture
      restaurant {
        id
        addressLine1
        addressLine2
        websiteAddress
        phoneNumber
        restaurantName
        city
        state
        zipcode
        country
      }
    }
    nextToken
  }
}
`;
