/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  email?: string | null,
  profilePicture?: string | null,
  isRestaurantOwnser?: boolean | null,
};

export type UpdateUserInput = {
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  email?: string | null,
  profilePicture?: string | null,
  isRestaurantOwnser?: boolean | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateRestaurantInput = {
  id?: string | null,
  addressLine1?: string | null,
  addressLine2?: string | null,
  city?: string | null,
  state?: string | null,
  zipcode?: string | null,
  country?: string | null,
  restaurantUserId?: string | null,
};

export type UpdateRestaurantInput = {
  id: string,
  addressLine1?: string | null,
  addressLine2?: string | null,
  city?: string | null,
  state?: string | null,
  zipcode?: string | null,
  country?: string | null,
  restaurantUserId?: string | null,
};

export type DeleteRestaurantInput = {
  id?: string | null,
};

export type CreateTestingEventInput = {
  id?: string | null,
  testingEventName?: string | null,
  eventStartDate?: string | null,
  eventStartTime?: string | null,
  eventEndDate?: string | null,
  eventEndTime?: string | null,
  testingEventRestaurantId?: string | null,
};

export type UpdateTestingEventInput = {
  id: string,
  testingEventName?: string | null,
  eventStartDate?: string | null,
  eventStartTime?: string | null,
  eventEndDate?: string | null,
  eventEndTime?: string | null,
  testingEventRestaurantId?: string | null,
};

export type DeleteTestingEventInput = {
  id?: string | null,
};

export type CreateEventMenuInput = {
  id?: string | null,
  menuPicture?: string | null,
  menuPrice?: string | null,
  eventMenuTestingEventId?: string | null,
};

export type UpdateEventMenuInput = {
  id: string,
  menuPicture?: string | null,
  menuPrice?: string | null,
  eventMenuTestingEventId?: string | null,
};

export type DeleteEventMenuInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null,
  firstname?: ModelStringFilterInput | null,
  lastname?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  profilePicture?: ModelStringFilterInput | null,
  isRestaurantOwnser?: ModelBooleanFilterInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDFilterInput | null,
  addressLine1?: ModelStringFilterInput | null,
  addressLine2?: ModelStringFilterInput | null,
  city?: ModelStringFilterInput | null,
  state?: ModelStringFilterInput | null,
  zipcode?: ModelStringFilterInput | null,
  country?: ModelStringFilterInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
};

export type ModelTestingEventFilterInput = {
  id?: ModelIDFilterInput | null,
  testingEventName?: ModelStringFilterInput | null,
  eventStartDate?: ModelStringFilterInput | null,
  eventStartTime?: ModelStringFilterInput | null,
  eventEndDate?: ModelStringFilterInput | null,
  eventEndTime?: ModelStringFilterInput | null,
  and?: Array< ModelTestingEventFilterInput | null > | null,
  or?: Array< ModelTestingEventFilterInput | null > | null,
  not?: ModelTestingEventFilterInput | null,
};

export type ModelEventMenuFilterInput = {
  id?: ModelIDFilterInput | null,
  menuPicture?: ModelStringFilterInput | null,
  menuPrice?: ModelStringFilterInput | null,
  and?: Array< ModelEventMenuFilterInput | null > | null,
  or?: Array< ModelEventMenuFilterInput | null > | null,
  not?: ModelEventMenuFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    firstname: string | null,
    lastname: string | null,
    email: string | null,
    profilePicture: string | null,
    isRestaurantOwnser: boolean | null,
    restaurants:  {
      __typename: "ModelRestaurantConnection",
      items:  Array< {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    firstname: string | null,
    lastname: string | null,
    email: string | null,
    profilePicture: string | null,
    isRestaurantOwnser: boolean | null,
    restaurants:  {
      __typename: "ModelRestaurantConnection",
      items:  Array< {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    firstname: string | null,
    lastname: string | null,
    email: string | null,
    profilePicture: string | null,
    isRestaurantOwnser: boolean | null,
    restaurants:  {
      __typename: "ModelRestaurantConnection",
      items:  Array< {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateRestaurantMutationVariables = {
  input: CreateRestaurantInput,
};

export type CreateRestaurantMutation = {
  createRestaurant:  {
    __typename: "Restaurant",
    id: string,
    addressLine1: string | null,
    addressLine2: string | null,
    city: string | null,
    state: string | null,
    zipcode: string | null,
    country: string | null,
    user:  {
      __typename: "User",
      id: string,
      firstname: string | null,
      lastname: string | null,
      email: string | null,
      profilePicture: string | null,
      isRestaurantOwnser: boolean | null,
      restaurants:  {
        __typename: "ModelRestaurantConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tastingEvents:  {
      __typename: "ModelTestingEventConnection",
      items:  Array< {
        __typename: "TestingEvent",
        id: string,
        testingEventName: string | null,
        eventStartDate: string | null,
        eventStartTime: string | null,
        eventEndDate: string | null,
        eventEndTime: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateRestaurantMutationVariables = {
  input: UpdateRestaurantInput,
};

export type UpdateRestaurantMutation = {
  updateRestaurant:  {
    __typename: "Restaurant",
    id: string,
    addressLine1: string | null,
    addressLine2: string | null,
    city: string | null,
    state: string | null,
    zipcode: string | null,
    country: string | null,
    user:  {
      __typename: "User",
      id: string,
      firstname: string | null,
      lastname: string | null,
      email: string | null,
      profilePicture: string | null,
      isRestaurantOwnser: boolean | null,
      restaurants:  {
        __typename: "ModelRestaurantConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tastingEvents:  {
      __typename: "ModelTestingEventConnection",
      items:  Array< {
        __typename: "TestingEvent",
        id: string,
        testingEventName: string | null,
        eventStartDate: string | null,
        eventStartTime: string | null,
        eventEndDate: string | null,
        eventEndTime: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteRestaurantMutationVariables = {
  input: DeleteRestaurantInput,
};

export type DeleteRestaurantMutation = {
  deleteRestaurant:  {
    __typename: "Restaurant",
    id: string,
    addressLine1: string | null,
    addressLine2: string | null,
    city: string | null,
    state: string | null,
    zipcode: string | null,
    country: string | null,
    user:  {
      __typename: "User",
      id: string,
      firstname: string | null,
      lastname: string | null,
      email: string | null,
      profilePicture: string | null,
      isRestaurantOwnser: boolean | null,
      restaurants:  {
        __typename: "ModelRestaurantConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tastingEvents:  {
      __typename: "ModelTestingEventConnection",
      items:  Array< {
        __typename: "TestingEvent",
        id: string,
        testingEventName: string | null,
        eventStartDate: string | null,
        eventStartTime: string | null,
        eventEndDate: string | null,
        eventEndTime: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateTestingEventMutationVariables = {
  input: CreateTestingEventInput,
};

export type CreateTestingEventMutation = {
  createTestingEvent:  {
    __typename: "TestingEvent",
    id: string,
    testingEventName: string | null,
    eventStartDate: string | null,
    eventStartTime: string | null,
    eventEndDate: string | null,
    eventEndTime: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      city: string | null,
      state: string | null,
      zipcode: string | null,
      country: string | null,
      user:  {
        __typename: "User",
        id: string,
        firstname: string | null,
        lastname: string | null,
        email: string | null,
        profilePicture: string | null,
        isRestaurantOwnser: boolean | null,
      } | null,
      tastingEvents:  {
        __typename: "ModelTestingEventConnection",
        nextToken: string | null,
      } | null,
    } | null,
    eventMenus:  {
      __typename: "ModelEventMenuConnection",
      items:  Array< {
        __typename: "EventMenu",
        id: string,
        menuPicture: string | null,
        menuPrice: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateTestingEventMutationVariables = {
  input: UpdateTestingEventInput,
};

export type UpdateTestingEventMutation = {
  updateTestingEvent:  {
    __typename: "TestingEvent",
    id: string,
    testingEventName: string | null,
    eventStartDate: string | null,
    eventStartTime: string | null,
    eventEndDate: string | null,
    eventEndTime: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      city: string | null,
      state: string | null,
      zipcode: string | null,
      country: string | null,
      user:  {
        __typename: "User",
        id: string,
        firstname: string | null,
        lastname: string | null,
        email: string | null,
        profilePicture: string | null,
        isRestaurantOwnser: boolean | null,
      } | null,
      tastingEvents:  {
        __typename: "ModelTestingEventConnection",
        nextToken: string | null,
      } | null,
    } | null,
    eventMenus:  {
      __typename: "ModelEventMenuConnection",
      items:  Array< {
        __typename: "EventMenu",
        id: string,
        menuPicture: string | null,
        menuPrice: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteTestingEventMutationVariables = {
  input: DeleteTestingEventInput,
};

export type DeleteTestingEventMutation = {
  deleteTestingEvent:  {
    __typename: "TestingEvent",
    id: string,
    testingEventName: string | null,
    eventStartDate: string | null,
    eventStartTime: string | null,
    eventEndDate: string | null,
    eventEndTime: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      city: string | null,
      state: string | null,
      zipcode: string | null,
      country: string | null,
      user:  {
        __typename: "User",
        id: string,
        firstname: string | null,
        lastname: string | null,
        email: string | null,
        profilePicture: string | null,
        isRestaurantOwnser: boolean | null,
      } | null,
      tastingEvents:  {
        __typename: "ModelTestingEventConnection",
        nextToken: string | null,
      } | null,
    } | null,
    eventMenus:  {
      __typename: "ModelEventMenuConnection",
      items:  Array< {
        __typename: "EventMenu",
        id: string,
        menuPicture: string | null,
        menuPrice: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateEventMenuMutationVariables = {
  input: CreateEventMenuInput,
};

export type CreateEventMenuMutation = {
  createEventMenu:  {
    __typename: "EventMenu",
    id: string,
    menuPicture: string | null,
    menuPrice: string | null,
    testingEvent:  {
      __typename: "TestingEvent",
      id: string,
      testingEventName: string | null,
      eventStartDate: string | null,
      eventStartTime: string | null,
      eventEndDate: string | null,
      eventEndTime: string | null,
      restaurant:  {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null,
      eventMenus:  {
        __typename: "ModelEventMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateEventMenuMutationVariables = {
  input: UpdateEventMenuInput,
};

export type UpdateEventMenuMutation = {
  updateEventMenu:  {
    __typename: "EventMenu",
    id: string,
    menuPicture: string | null,
    menuPrice: string | null,
    testingEvent:  {
      __typename: "TestingEvent",
      id: string,
      testingEventName: string | null,
      eventStartDate: string | null,
      eventStartTime: string | null,
      eventEndDate: string | null,
      eventEndTime: string | null,
      restaurant:  {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null,
      eventMenus:  {
        __typename: "ModelEventMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteEventMenuMutationVariables = {
  input: DeleteEventMenuInput,
};

export type DeleteEventMenuMutation = {
  deleteEventMenu:  {
    __typename: "EventMenu",
    id: string,
    menuPicture: string | null,
    menuPrice: string | null,
    testingEvent:  {
      __typename: "TestingEvent",
      id: string,
      testingEventName: string | null,
      eventStartDate: string | null,
      eventStartTime: string | null,
      eventEndDate: string | null,
      eventEndTime: string | null,
      restaurant:  {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null,
      eventMenus:  {
        __typename: "ModelEventMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    firstname: string | null,
    lastname: string | null,
    email: string | null,
    profilePicture: string | null,
    isRestaurantOwnser: boolean | null,
    restaurants:  {
      __typename: "ModelRestaurantConnection",
      items:  Array< {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        tastingEvents:  {
          __typename: "ModelTestingEventConnection",
          items:  Array< {
            __typename: "TestingEvent",
            id: string,
            testingEventName: string | null,
            eventStartDate: string | null,
            eventStartTime: string | null,
            eventEndDate: string | null,
            eventMenus:  {
              __typename: "ModelEventMenuConnection",
              items:  Array< {
                __typename: "EventMenu",
                id: string,
                menuPicture: string | null,
                menuPrice: string | null,
              } | null > | null,
              nextToken: string | null,
            } | null,
            eventEndTime: string | null,
          } | null > | null,
          nextToken: string | null,
        } | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstname: string | null,
      lastname: string | null,
      email: string | null,
      profilePicture: string | null,
      isRestaurantOwnser: boolean | null,
      restaurants:  {
        __typename: "ModelRestaurantConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRestaurantQueryVariables = {
  id: string,
};

export type GetRestaurantQuery = {
  getRestaurant:  {
    __typename: "Restaurant",
    id: string,
    addressLine1: string | null,
    addressLine2: string | null,
    city: string | null,
    state: string | null,
    zipcode: string | null,
    country: string | null,
    user:  {
      __typename: "User",
      id: string,
      firstname: string | null,
      lastname: string | null,
      email: string | null,
      profilePicture: string | null,
      isRestaurantOwnser: boolean | null,
      restaurants:  {
        __typename: "ModelRestaurantConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tastingEvents:  {
      __typename: "ModelTestingEventConnection",
      items:  Array< {
        __typename: "TestingEvent",
        id: string,
        testingEventName: string | null,
        eventStartDate: string | null,
        eventStartTime: string | null,
        eventEndDate: string | null,
        eventEndTime: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListRestaurantsQueryVariables = {
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantsQuery = {
  listRestaurants:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      city: string | null,
      state: string | null,
      zipcode: string | null,
      country: string | null,
      user:  {
        __typename: "User",
        id: string,
        firstname: string | null,
        lastname: string | null,
        email: string | null,
        profilePicture: string | null,
        isRestaurantOwnser: boolean | null,
      } | null,
      tastingEvents:  {
        __typename: "ModelTestingEventConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTestingEventQueryVariables = {
  id: string,
};

export type GetTestingEventQuery = {
  getTestingEvent:  {
    __typename: "TestingEvent",
    id: string,
    testingEventName: string | null,
    eventStartDate: string | null,
    eventStartTime: string | null,
    eventEndDate: string | null,
    eventEndTime: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      city: string | null,
      state: string | null,
      zipcode: string | null,
      country: string | null,
      user:  {
        __typename: "User",
        id: string,
        firstname: string | null,
        lastname: string | null,
        email: string | null,
        profilePicture: string | null,
        isRestaurantOwnser: boolean | null,
      } | null,
      tastingEvents:  {
        __typename: "ModelTestingEventConnection",
        nextToken: string | null,
      } | null,
    } | null,
    eventMenus:  {
      __typename: "ModelEventMenuConnection",
      items:  Array< {
        __typename: "EventMenu",
        id: string,
        menuPicture: string | null,
        menuPrice: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListTestingEventsQueryVariables = {
  filter?: ModelTestingEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestingEventsQuery = {
  listTestingEvents:  {
    __typename: "ModelTestingEventConnection",
    items:  Array< {
      __typename: "TestingEvent",
      id: string,
      testingEventName: string | null,
      eventStartDate: string | null,
      eventStartTime: string | null,
      eventEndDate: string | null,
      eventEndTime: string | null,
      restaurant:  {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null,
      eventMenus:  {
        __typename: "ModelEventMenuConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEventMenuQueryVariables = {
  id: string,
};

export type GetEventMenuQuery = {
  getEventMenu:  {
    __typename: "EventMenu",
    id: string,
    menuPicture: string | null,
    menuPrice: string | null,
    testingEvent:  {
      __typename: "TestingEvent",
      id: string,
      testingEventName: string | null,
      eventStartDate: string | null,
      eventStartTime: string | null,
      eventEndDate: string | null,
      eventEndTime: string | null,
      restaurant:  {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null,
      eventMenus:  {
        __typename: "ModelEventMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListEventMenusQueryVariables = {
  filter?: ModelEventMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventMenusQuery = {
  listEventMenus:  {
    __typename: "ModelEventMenuConnection",
    items:  Array< {
      __typename: "EventMenu",
      id: string,
      menuPicture: string | null,
      menuPrice: string | null,
      testingEvent:  {
        __typename: "TestingEvent",
        id: string,
        testingEventName: string | null,
        eventStartDate: string | null,
        eventStartTime: string | null,
        eventEndDate: string | null,
        eventEndTime: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    firstname: string | null,
    lastname: string | null,
    email: string | null,
    profilePicture: string | null,
    isRestaurantOwnser: boolean | null,
    restaurants:  {
      __typename: "ModelRestaurantConnection",
      items:  Array< {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    firstname: string | null,
    lastname: string | null,
    email: string | null,
    profilePicture: string | null,
    isRestaurantOwnser: boolean | null,
    restaurants:  {
      __typename: "ModelRestaurantConnection",
      items:  Array< {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    firstname: string | null,
    lastname: string | null,
    email: string | null,
    profilePicture: string | null,
    isRestaurantOwnser: boolean | null,
    restaurants:  {
      __typename: "ModelRestaurantConnection",
      items:  Array< {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateRestaurantSubscription = {
  onCreateRestaurant:  {
    __typename: "Restaurant",
    id: string,
    addressLine1: string | null,
    addressLine2: string | null,
    city: string | null,
    state: string | null,
    zipcode: string | null,
    country: string | null,
    user:  {
      __typename: "User",
      id: string,
      firstname: string | null,
      lastname: string | null,
      email: string | null,
      profilePicture: string | null,
      isRestaurantOwnser: boolean | null,
      restaurants:  {
        __typename: "ModelRestaurantConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tastingEvents:  {
      __typename: "ModelTestingEventConnection",
      items:  Array< {
        __typename: "TestingEvent",
        id: string,
        testingEventName: string | null,
        eventStartDate: string | null,
        eventStartTime: string | null,
        eventEndDate: string | null,
        eventEndTime: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateRestaurantSubscription = {
  onUpdateRestaurant:  {
    __typename: "Restaurant",
    id: string,
    addressLine1: string | null,
    addressLine2: string | null,
    city: string | null,
    state: string | null,
    zipcode: string | null,
    country: string | null,
    user:  {
      __typename: "User",
      id: string,
      firstname: string | null,
      lastname: string | null,
      email: string | null,
      profilePicture: string | null,
      isRestaurantOwnser: boolean | null,
      restaurants:  {
        __typename: "ModelRestaurantConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tastingEvents:  {
      __typename: "ModelTestingEventConnection",
      items:  Array< {
        __typename: "TestingEvent",
        id: string,
        testingEventName: string | null,
        eventStartDate: string | null,
        eventStartTime: string | null,
        eventEndDate: string | null,
        eventEndTime: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteRestaurantSubscription = {
  onDeleteRestaurant:  {
    __typename: "Restaurant",
    id: string,
    addressLine1: string | null,
    addressLine2: string | null,
    city: string | null,
    state: string | null,
    zipcode: string | null,
    country: string | null,
    user:  {
      __typename: "User",
      id: string,
      firstname: string | null,
      lastname: string | null,
      email: string | null,
      profilePicture: string | null,
      isRestaurantOwnser: boolean | null,
      restaurants:  {
        __typename: "ModelRestaurantConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tastingEvents:  {
      __typename: "ModelTestingEventConnection",
      items:  Array< {
        __typename: "TestingEvent",
        id: string,
        testingEventName: string | null,
        eventStartDate: string | null,
        eventStartTime: string | null,
        eventEndDate: string | null,
        eventEndTime: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateTestingEventSubscription = {
  onCreateTestingEvent:  {
    __typename: "TestingEvent",
    id: string,
    testingEventName: string | null,
    eventStartDate: string | null,
    eventStartTime: string | null,
    eventEndDate: string | null,
    eventEndTime: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      city: string | null,
      state: string | null,
      zipcode: string | null,
      country: string | null,
      user:  {
        __typename: "User",
        id: string,
        firstname: string | null,
        lastname: string | null,
        email: string | null,
        profilePicture: string | null,
        isRestaurantOwnser: boolean | null,
      } | null,
      tastingEvents:  {
        __typename: "ModelTestingEventConnection",
        nextToken: string | null,
      } | null,
    } | null,
    eventMenus:  {
      __typename: "ModelEventMenuConnection",
      items:  Array< {
        __typename: "EventMenu",
        id: string,
        menuPicture: string | null,
        menuPrice: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateTestingEventSubscription = {
  onUpdateTestingEvent:  {
    __typename: "TestingEvent",
    id: string,
    testingEventName: string | null,
    eventStartDate: string | null,
    eventStartTime: string | null,
    eventEndDate: string | null,
    eventEndTime: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      city: string | null,
      state: string | null,
      zipcode: string | null,
      country: string | null,
      user:  {
        __typename: "User",
        id: string,
        firstname: string | null,
        lastname: string | null,
        email: string | null,
        profilePicture: string | null,
        isRestaurantOwnser: boolean | null,
      } | null,
      tastingEvents:  {
        __typename: "ModelTestingEventConnection",
        nextToken: string | null,
      } | null,
    } | null,
    eventMenus:  {
      __typename: "ModelEventMenuConnection",
      items:  Array< {
        __typename: "EventMenu",
        id: string,
        menuPicture: string | null,
        menuPrice: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteTestingEventSubscription = {
  onDeleteTestingEvent:  {
    __typename: "TestingEvent",
    id: string,
    testingEventName: string | null,
    eventStartDate: string | null,
    eventStartTime: string | null,
    eventEndDate: string | null,
    eventEndTime: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      city: string | null,
      state: string | null,
      zipcode: string | null,
      country: string | null,
      user:  {
        __typename: "User",
        id: string,
        firstname: string | null,
        lastname: string | null,
        email: string | null,
        profilePicture: string | null,
        isRestaurantOwnser: boolean | null,
      } | null,
      tastingEvents:  {
        __typename: "ModelTestingEventConnection",
        nextToken: string | null,
      } | null,
    } | null,
    eventMenus:  {
      __typename: "ModelEventMenuConnection",
      items:  Array< {
        __typename: "EventMenu",
        id: string,
        menuPicture: string | null,
        menuPrice: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateEventMenuSubscription = {
  onCreateEventMenu:  {
    __typename: "EventMenu",
    id: string,
    menuPicture: string | null,
    menuPrice: string | null,
    testingEvent:  {
      __typename: "TestingEvent",
      id: string,
      testingEventName: string | null,
      eventStartDate: string | null,
      eventStartTime: string | null,
      eventEndDate: string | null,
      eventEndTime: string | null,
      restaurant:  {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null,
      eventMenus:  {
        __typename: "ModelEventMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateEventMenuSubscription = {
  onUpdateEventMenu:  {
    __typename: "EventMenu",
    id: string,
    menuPicture: string | null,
    menuPrice: string | null,
    testingEvent:  {
      __typename: "TestingEvent",
      id: string,
      testingEventName: string | null,
      eventStartDate: string | null,
      eventStartTime: string | null,
      eventEndDate: string | null,
      eventEndTime: string | null,
      restaurant:  {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null,
      eventMenus:  {
        __typename: "ModelEventMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteEventMenuSubscription = {
  onDeleteEventMenu:  {
    __typename: "EventMenu",
    id: string,
    menuPicture: string | null,
    menuPrice: string | null,
    testingEvent:  {
      __typename: "TestingEvent",
      id: string,
      testingEventName: string | null,
      eventStartDate: string | null,
      eventStartTime: string | null,
      eventEndDate: string | null,
      eventEndTime: string | null,
      restaurant:  {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
      } | null,
      eventMenus:  {
        __typename: "ModelEventMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
