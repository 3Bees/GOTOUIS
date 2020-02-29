import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';

const client = new ApolloClient({
  uri: 'https://api.gotoapp.io/graphql',
});

export default class ApiManager {
  getPostbyId = async () => {
    let query = gql`
      {
        Post(PostId: "somepostId") {
          _id
          Distance
          Description
          Price
          Picture
          Activated
          GaveUp
          CreatedAt
          UpdatedAt
          User {
            _id
            Name
            Email
            Photo
          }
          Subject
        }
      }
    `;
    try {
      let data = await client.query({query});
      if (data) {
        return data;
      }
      console.log('TCL: login -> data', data);
    } catch (error) {
      console.log('Majid', error);
    }
  };

  Code = async () => {
    let query = gql`
      {
        Posts(
          data: {
            MaxDistance: 10
            Location: {Lat: "12.00", Lon: "15.00"}
            Search: "Donate"
          }
        ) {
          _id
          Distance
          Description
          Price
          Picture
          Activated
          GaveUp
          CreatedAt
          UpdatedAt
          User {
            _id
            Name
            Email
            Photo
          }
          Subject
        }
      }
    `;
    try {
      let data = await client.query({query});
      if (data) {
        return data;
      }
      console.log('TCL: login -> data', data);
    } catch (error) {
      console.log('Majid', error);
    }
  };

  notificationSpecific = async () => {
    let query = gql`
      {
        Notification(NotificationId: "Notification ID") {
          _id
          Text
          CreatedAt
          Url
          User {
            Name
            Email
            Photo
            Password
          }
        }
      }
    `;
    try {
      let data = await client.query({query});
      if (data) {
        return data;
      }
      console.log('TCL: login -> data', data);
    } catch (error) {
      console.log('Majid', error);
    }
  };

  EvaluteUser = async () => {
    let query = gql`
      mutation {
        EvaluateUser(
          data: {
            UserId: "5e4e346e5cfa1b44995b904b"
            PostId: "5e57b4925cfa1b44995b9064"
            Rating: 4
          }
        ) {
          User {
            _id
            Name
            Rating
            Photo
            Badge
            Email
          }
          Post {
            _id
            Subject
            Distance
            Description
            UpdatedAt
            CreatedAt
            GaveUp
            Activated
            Location {
              Lat
              Lon
            }
          }
        }
      }
    `;
    try {
      let data = await clientheader.mutate({mutation: query});
      if (data) {
        return data;
      }
      console.log('TCL: login -> data', data);
    } catch (error) {
      console.log('Majid', error);
    }
  };

  closePost = async () => {
    let query = gql`
      mutation {
        PostClose(data: {PostId: "5e57ab115cfa1b44995b9062", GaveUp: true})
      }
    `;
    try {
      let data = await clientheader.mutate({mutation: query});
      if (data) {
        return data;
      }
      console.log('TCL: login -> data', data);
    } catch (error) {
      console.log('Majid', error);
    }
  };

  notification = async () => {
    let query = gql`
      {
        Notifications {
          _id
          Text
          Url
          User {
            _id
            Name
            Email
            Photo
          }
        }
      }
    `;
    try {
      let token = await AsyncStorage.getItem('token');
    let data = await new ApolloClient({
      uri: 'https://api.gotoapp.io/graphql',
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    }).query({query});
      if (data) {
        return data;
      }
      console.log('TCL: login -> data', data);
    } catch (error) {
      console.log('Majid', error);
    }
  };

  createPost = async (Subject, Description, price, location, Picture, Type) => {
    console.log(Subject, Description, Picture, price);
    let query = gql`
      mutation {
        PostCreate(
          data: {
            Subject: "${Subject}"
            Description: "${Description}"
            Price: 12
            Location: {Lat: "33.30", Lon: "74.245"}
            Picture: "${Picture}"
            Type: "${Type}"
          }
        ) {
          _id
          Subject
          Distance
          Description
          UpdatedAt
          CreatedAt
          User {
            _id
            Name
            Rating
            Photo
            Badge
            Email
          }
          GaveUp
          Activated
          Location {
            Lat
            Lon
          }
        }
      }
    `;
    try {
      let token = await AsyncStorage.getItem('token');
      let data = await new ApolloClient({
        uri: 'https://api.gotoapp.io/graphql',
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      }).mutate({mutation: query});
      if (data) {
        return data;
      }
      console.log('TCL: login -> data', data);
    } catch (error) {
      alert(error);
    }
  };

  createPostPrice = async (
    Subject,
    Description,
    price,
    location,
    Picture,
    Type,
  ) => {
    console.log('checker', Subject, Description, Picture, price);
    let query = gql`
      mutation {
        PostCreate(
          data: {
            Subject: "${Subject}"
            Description: "${Description}"
            Price: 
            Location: {Lat: "33.30", Lon: "74.245"}
            Picture: "${Picture}"
            Type: "${Type}"
          }
        ) {
          _id
          Subject
          Distance
          Description
          UpdatedAt
          CreatedAt
          User {
            _id
            Name
            Rating
            Photo
            Badge
            Email
          }
          GaveUp
          Activated
          Location {
            Lat
            Lon
          }
        }
      }
    `;
    try {
      let token = await AsyncStorage.getItem('token');
      let data = await new ApolloClient({
        uri: 'https://api.gotoapp.io/graphql',
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      }).mutate({mutation: query});
      if (data) {
        return data;
      }
      console.log('TCL: login -> data', data);
    } catch (error) {
      alert(error);
    }
  };

  QueryRequest = async (name, email, photo) => {
    let query = gql`
  mutation {
    EditProfile(data: {Name: "${name}"}) {
      _id
      Name
      Rating
      Photo
      Badge
      Email
    }
  }
`;
    try {
      let token = await AsyncStorage.getItem('token');
      let data = await new ApolloClient({
        uri: 'https://api.gotoapp.io/graphql',
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      }).mutate({mutation: query});
      if (data) {
        return data;
      }
      console.log('TCL: login -> data', data);
    } catch (error) {
      alert(error);
    }
  };

  SignIn = async (email, password) => {
    let query = gql`
{
  SignIn(data: {Email: "${email}", Password: "${password}"}) {
    User {
      _id
      Name
      Rating
      Photo
      Badge
      Email
    }
    Token
  }
}
`;
    try {
      let data = await client.query({query});
      if (data) {
        return data;
      }
      console.log('TCL: login -> data', data);
    } catch (error) {
      alert(error);
    }
  };

  SignUp = async (name, email, password) => {
    let query = gql`
    mutation {
      SignUp(data: {Email: "${email}", Password: "${password}",  Name: "${name}"}) {
        User {
          _id
          Name
          Rating
          Photo
          Badge
          Email
        }
        Token
      }
    }
  `;
    try {
      let data = await client.mutate({mutation: query});
      if (data) {
        return data;
      }
    } catch (error) {
      alert(error);
    }
  };
}
