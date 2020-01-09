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
    tastingEvents {
      items {
        id
        testingEventName
        eventStartDate
        eventStartTime
        eventEndDate
        eventEndTime
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
    tastingEvents {
      items {
        id
        testingEventName
        eventStartDate
        eventStartTime
        eventEndDate
        eventEndTime
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
    tastingEvents {
      items {
        id
        testingEventName
        eventStartDate
        eventStartTime
        eventEndDate
        eventEndTime
      }
      nextToken
    }
  }
}
`;
export const onCreateTestingEvent = `subscription OnCreateTestingEvent {
  onCreateTestingEvent {
    id
    testingEventName
    eventStartDate
    eventStartTime
    eventEndDate
    eventEndTime
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
      tastingEvents {
        nextToken
      }
    }
    eventMenus {
      items {
        id
        menuPicture
        menuPrice
      }
      nextToken
    }
  }
}
`;
export const onUpdateTestingEvent = `subscription OnUpdateTestingEvent {
  onUpdateTestingEvent {
    id
    testingEventName
    eventStartDate
    eventStartTime
    eventEndDate
    eventEndTime
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
      tastingEvents {
        nextToken
      }
    }
    eventMenus {
      items {
        id
        menuPicture
        menuPrice
      }
      nextToken
    }
  }
}
`;
export const onDeleteTestingEvent = `subscription OnDeleteTestingEvent {
  onDeleteTestingEvent {
    id
    testingEventName
    eventStartDate
    eventStartTime
    eventEndDate
    eventEndTime
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
      tastingEvents {
        nextToken
      }
    }
    eventMenus {
      items {
        id
        menuPicture
        menuPrice
      }
      nextToken
    }
  }
}
`;
export const onCreateEventMenu = `subscription OnCreateEventMenu {
  onCreateEventMenu {
    id
    menuPicture
    menuPrice
    testingEvent {
      id
      testingEventName
      eventStartDate
      eventStartTime
      eventEndDate
      eventEndTime
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
      eventMenus {
        nextToken
      }
    }
  }
}
`;
export const onUpdateEventMenu = `subscription OnUpdateEventMenu {
  onUpdateEventMenu {
    id
    menuPicture
    menuPrice
    testingEvent {
      id
      testingEventName
      eventStartDate
      eventStartTime
      eventEndDate
      eventEndTime
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
      eventMenus {
        nextToken
      }
    }
  }
}
`;
export const onDeleteEventMenu = `subscription OnDeleteEventMenu {
  onDeleteEventMenu {
    id
    menuPicture
    menuPrice
    testingEvent {
      id
      testingEventName
      eventStartDate
      eventStartTime
      eventEndDate
      eventEndTime
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
      eventMenus {
        nextToken
      }
    }
  }
}
`;
