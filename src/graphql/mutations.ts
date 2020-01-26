// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createRestaurant = `mutation CreateRestaurant($input: CreateRestaurantInput!) {
  createRestaurant(input: $input) {
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
export const updateRestaurant = `mutation UpdateRestaurant($input: UpdateRestaurantInput!) {
  updateRestaurant(input: $input) {
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
export const deleteRestaurant = `mutation DeleteRestaurant($input: DeleteRestaurantInput!) {
  deleteRestaurant(input: $input) {
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
export const createRestaurantMenu = `mutation CreateRestaurantMenu($input: CreateRestaurantMenuInput!) {
  createRestaurantMenu(input: $input) {
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
export const updateRestaurantMenu = `mutation UpdateRestaurantMenu($input: UpdateRestaurantMenuInput!) {
  updateRestaurantMenu(input: $input) {
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
export const deleteRestaurantMenu = `mutation DeleteRestaurantMenu($input: DeleteRestaurantMenuInput!) {
  deleteRestaurantMenu(input: $input) {
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
