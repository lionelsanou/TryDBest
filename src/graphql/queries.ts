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
        restaurantName
        city
        tastingEvents {
          items {
            id
            testingEventName
            eventStartDate
            eventStartTime
            eventEndDate
            eventMenus {
              items {
                id
                menuPicture
                menuPrice
              }
              nextToken
            }
            eventEndTime
          }
          nextToken
        }
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
        items{
          id
    testingEventName
    eventStartDate
    eventStartTime,
    eventMenus {
      items {
        id
        menuPicture
        menuPrice
      }
      nextToken
    }
    eventEndDate
    eventEndTime
        }
    
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTestingEvent = `query GetTestingEvent($id: ID!) {
  getTestingEvent(id: $id) {
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
export const listTestingEvents = `query ListTestingEvents(
  $filter: ModelTestingEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestingEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getEventMenu = `query GetEventMenu($id: ID!) {
  getEventMenu(id: $id) {
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
export const listEventMenus = `query ListEventMenus(
  $filter: ModelEventMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`;
