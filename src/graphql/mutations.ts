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
export const updateRestaurant = `mutation UpdateRestaurant($input: UpdateRestaurantInput!) {
  updateRestaurant(input: $input) {
    id
    addressLine1
    addressLine2
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
export const deleteRestaurant = `mutation DeleteRestaurant($input: DeleteRestaurantInput!) {
  deleteRestaurant(input: $input) {
    id
    addressLine1
    addressLine2
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
export const createTestingEvent = `mutation CreateTestingEvent($input: CreateTestingEventInput!) {
  createTestingEvent(input: $input) {
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
export const updateTestingEvent = `mutation UpdateTestingEvent($input: UpdateTestingEventInput!) {
  updateTestingEvent(input: $input) {
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
export const deleteTestingEvent = `mutation DeleteTestingEvent($input: DeleteTestingEventInput!) {
  deleteTestingEvent(input: $input) {
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
export const createEventMenu = `mutation CreateEventMenu($input: CreateEventMenuInput!) {
  createEventMenu(input: $input) {
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
export const updateEventMenu = `mutation UpdateEventMenu($input: UpdateEventMenuInput!) {
  updateEventMenu(input: $input) {
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
export const deleteEventMenu = `mutation DeleteEventMenu($input: DeleteEventMenuInput!) {
  deleteEventMenu(input: $input) {
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
