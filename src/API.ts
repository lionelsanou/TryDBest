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
  websiteAddress?: string | null,
  phoneNumber?: string | null,
  restaurantName?: string | null,
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
  websiteAddress?: string | null,
  phoneNumber?: string | null,
  restaurantName?: string | null,
  city?: string | null,
  state?: string | null,
  zipcode?: string | null,
  country?: string | null,
  restaurantUserId?: string | null,
};

export type DeleteRestaurantInput = {
  id?: string | null,
};

export type CreateRestaurantMenuInput = {
  id?: string | null,
  menuType?: string | null,
  menuPortion?: string | null,
  menuName?: string | null,
  menuDescription?: string | null,
  menuPrice?: string | null,
  menuPicture?: string | null,
  restaurantMenuRestaurantId?: string | null,
};

export type UpdateRestaurantMenuInput = {
  id: string,
  menuType?: string | null,
  menuPortion?: string | null,
  menuName?: string | null,
  menuDescription?: string | null,
  menuPrice?: string | null,
  menuPicture?: string | null,
  restaurantMenuRestaurantId?: string | null,
};

export type DeleteRestaurantMenuInput = {
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
  websiteAddress?: ModelStringFilterInput | null,
  phoneNumber?: ModelStringFilterInput | null,
  restaurantName?: ModelStringFilterInput | null,
  city?: ModelStringFilterInput | null,
  state?: ModelStringFilterInput | null,
  zipcode?: ModelStringFilterInput | null,
  country?: ModelStringFilterInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
};

export type ModelRestaurantMenuFilterInput = {
  id?: ModelIDFilterInput | null,
  menuType?: ModelStringFilterInput | null,
  menuPortion?: ModelStringFilterInput | null,
  menuName?: ModelStringFilterInput | null,
  menuDescription?: ModelStringFilterInput | null,
  menuPrice?: ModelStringFilterInput | null,
  menuPicture?: ModelStringFilterInput | null,
  and?: Array< ModelRestaurantMenuFilterInput | null > | null,
  or?: Array< ModelRestaurantMenuFilterInput | null > | null,
  not?: ModelRestaurantMenuFilterInput | null,
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
        websiteAddress: string | null,
        phoneNumber: string | null,
        restaurantName: string | null,
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
        websiteAddress: string | null,
        phoneNumber: string | null,
        restaurantName: string | null,
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
        websiteAddress: string | null,
        phoneNumber: string | null,
        restaurantName: string | null,
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
    websiteAddress: string | null,
    phoneNumber: string | null,
    restaurantName: string | null,
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
    RestaurantMenus:  {
      __typename: "ModelRestaurantMenuConnection",
      items:  Array< {
        __typename: "RestaurantMenu",
        id: string,
        menuType: string | null,
        menuPortion: string | null,
        menuName: string | null,
        menuDescription: string | null,
        menuPrice: string | null,
        menuPicture: string | null,
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
    websiteAddress: string | null,
    phoneNumber: string | null,
    restaurantName: string | null,
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
    RestaurantMenus:  {
      __typename: "ModelRestaurantMenuConnection",
      items:  Array< {
        __typename: "RestaurantMenu",
        id: string,
        menuType: string | null,
        menuPortion: string | null,
        menuName: string | null,
        menuDescription: string | null,
        menuPrice: string | null,
        menuPicture: string | null,
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
    websiteAddress: string | null,
    phoneNumber: string | null,
    restaurantName: string | null,
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
    RestaurantMenus:  {
      __typename: "ModelRestaurantMenuConnection",
      items:  Array< {
        __typename: "RestaurantMenu",
        id: string,
        menuType: string | null,
        menuPortion: string | null,
        menuName: string | null,
        menuDescription: string | null,
        menuPrice: string | null,
        menuPicture: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateRestaurantMenuMutationVariables = {
  input: CreateRestaurantMenuInput,
};

export type CreateRestaurantMenuMutation = {
  createRestaurantMenu:  {
    __typename: "RestaurantMenu",
    id: string,
    menuType: string | null,
    menuPortion: string | null,
    menuName: string | null,
    menuDescription: string | null,
    menuPrice: string | null,
    menuPicture: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      websiteAddress: string | null,
      phoneNumber: string | null,
      restaurantName: string | null,
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
      RestaurantMenus:  {
        __typename: "ModelRestaurantMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateRestaurantMenuMutationVariables = {
  input: UpdateRestaurantMenuInput,
};

export type UpdateRestaurantMenuMutation = {
  updateRestaurantMenu:  {
    __typename: "RestaurantMenu",
    id: string,
    menuType: string | null,
    menuPortion: string | null,
    menuName: string | null,
    menuDescription: string | null,
    menuPrice: string | null,
    menuPicture: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      websiteAddress: string | null,
      phoneNumber: string | null,
      restaurantName: string | null,
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
      RestaurantMenus:  {
        __typename: "ModelRestaurantMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteRestaurantMenuMutationVariables = {
  input: DeleteRestaurantMenuInput,
};

export type DeleteRestaurantMenuMutation = {
  deleteRestaurantMenu:  {
    __typename: "RestaurantMenu",
    id: string,
    menuType: string | null,
    menuPortion: string | null,
    menuName: string | null,
    menuDescription: string | null,
    menuPrice: string | null,
    menuPicture: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      websiteAddress: string | null,
      phoneNumber: string | null,
      restaurantName: string | null,
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
      RestaurantMenus:  {
        __typename: "ModelRestaurantMenuConnection",
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
        websiteAddress: string | null,
        phoneNumber: string | null,
        restaurantName: string | null,
        city: string | null,
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
    websiteAddress: string | null,
    phoneNumber: string | null,
    restaurantName: string | null,
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
    RestaurantMenus:  {
      __typename: "ModelRestaurantMenuConnection",
      items:  Array< {
        __typename: "RestaurantMenu",
        id: string,
        menuType: string | null,
        menuPortion: string | null,
        menuName: string | null,
        menuDescription: string | null,
        menuPrice: string | null,
        menuPicture: string | null,
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
      websiteAddress: string | null,
      phoneNumber: string | null,
      restaurantName: string | null,
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
      RestaurantMenus:  {
        __typename: "ModelRestaurantMenuConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRestaurantMenuQueryVariables = {
  id: string,
};

export type GetRestaurantMenuQuery = {
  getRestaurantMenu:  {
    __typename: "RestaurantMenu",
    id: string,
    menuType: string | null,
    menuPortion: string | null,
    menuName: string | null,
    menuDescription: string | null,
    menuPrice: string | null,
    menuPicture: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      websiteAddress: string | null,
      phoneNumber: string | null,
      restaurantName: string | null,
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
      RestaurantMenus:  {
        __typename: "ModelRestaurantMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListRestaurantMenusQueryVariables = {
  filter?: ModelRestaurantMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantMenusQuery = {
  listRestaurantMenus:  {
    __typename: "ModelRestaurantMenuConnection",
    items:  Array< {
      __typename: "RestaurantMenu",
      id: string,
      menuType: string | null,
      menuPortion: string | null,
      menuName: string | null,
      menuDescription: string | null,
      menuPrice: string | null,
      menuPicture: string | null,
      restaurant:  {
        __typename: "Restaurant",
        id: string,
        addressLine1: string | null,
        addressLine2: string | null,
        websiteAddress: string | null,
        phoneNumber: string | null,
        restaurantName: string | null,
        city: string | null,
        state: string | null,
        zipcode: string | null,
        country: string | null,
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
        websiteAddress: string | null,
        phoneNumber: string | null,
        restaurantName: string | null,
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
        websiteAddress: string | null,
        phoneNumber: string | null,
        restaurantName: string | null,
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
        websiteAddress: string | null,
        phoneNumber: string | null,
        restaurantName: string | null,
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
    websiteAddress: string | null,
    phoneNumber: string | null,
    restaurantName: string | null,
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
    RestaurantMenus:  {
      __typename: "ModelRestaurantMenuConnection",
      items:  Array< {
        __typename: "RestaurantMenu",
        id: string,
        menuType: string | null,
        menuPortion: string | null,
        menuName: string | null,
        menuDescription: string | null,
        menuPrice: string | null,
        menuPicture: string | null,
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
    websiteAddress: string | null,
    phoneNumber: string | null,
    restaurantName: string | null,
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
    RestaurantMenus:  {
      __typename: "ModelRestaurantMenuConnection",
      items:  Array< {
        __typename: "RestaurantMenu",
        id: string,
        menuType: string | null,
        menuPortion: string | null,
        menuName: string | null,
        menuDescription: string | null,
        menuPrice: string | null,
        menuPicture: string | null,
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
    websiteAddress: string | null,
    phoneNumber: string | null,
    restaurantName: string | null,
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
    RestaurantMenus:  {
      __typename: "ModelRestaurantMenuConnection",
      items:  Array< {
        __typename: "RestaurantMenu",
        id: string,
        menuType: string | null,
        menuPortion: string | null,
        menuName: string | null,
        menuDescription: string | null,
        menuPrice: string | null,
        menuPicture: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateRestaurantMenuSubscription = {
  onCreateRestaurantMenu:  {
    __typename: "RestaurantMenu",
    id: string,
    menuType: string | null,
    menuPortion: string | null,
    menuName: string | null,
    menuDescription: string | null,
    menuPrice: string | null,
    menuPicture: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      websiteAddress: string | null,
      phoneNumber: string | null,
      restaurantName: string | null,
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
      RestaurantMenus:  {
        __typename: "ModelRestaurantMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateRestaurantMenuSubscription = {
  onUpdateRestaurantMenu:  {
    __typename: "RestaurantMenu",
    id: string,
    menuType: string | null,
    menuPortion: string | null,
    menuName: string | null,
    menuDescription: string | null,
    menuPrice: string | null,
    menuPicture: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      websiteAddress: string | null,
      phoneNumber: string | null,
      restaurantName: string | null,
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
      RestaurantMenus:  {
        __typename: "ModelRestaurantMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteRestaurantMenuSubscription = {
  onDeleteRestaurantMenu:  {
    __typename: "RestaurantMenu",
    id: string,
    menuType: string | null,
    menuPortion: string | null,
    menuName: string | null,
    menuDescription: string | null,
    menuPrice: string | null,
    menuPicture: string | null,
    restaurant:  {
      __typename: "Restaurant",
      id: string,
      addressLine1: string | null,
      addressLine2: string | null,
      websiteAddress: string | null,
      phoneNumber: string | null,
      restaurantName: string | null,
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
      RestaurantMenus:  {
        __typename: "ModelRestaurantMenuConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
