// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateRestaurant = `subscription OnCreateRestaurant {
  onCreateRestaurant {
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
export const onUpdateRestaurant = `subscription OnUpdateRestaurant {
  onUpdateRestaurant {
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
export const onDeleteRestaurant = `subscription OnDeleteRestaurant {
  onDeleteRestaurant {
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
export const onCreateRestaurantMenu = `subscription OnCreateRestaurantMenu {
  onCreateRestaurantMenu {
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
export const onUpdateRestaurantMenu = `subscription OnUpdateRestaurantMenu {
  onUpdateRestaurantMenu {
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
export const onDeleteRestaurantMenu = `subscription OnDeleteRestaurantMenu {
  onDeleteRestaurantMenu {
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
