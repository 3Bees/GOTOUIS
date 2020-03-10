import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';

const client = new ApolloClient({
  uri: 'https://api.gotoapp.io/graphql',
});

export default class ApiManager {
  postComment = async (post, Comment) => {
    let query = gql`
    mutation {
      CommentCreate(data: { PostId: "${post}", Text: "${Comment}" }) {
        _id
        Text
        User {
          _id
          Name
        }
        Reply {
          Text
          User {
            _id
            Name
          }
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
      console.log('Majid', error);
    }
  };

  getPostbyId = async postid => {
    let query = gql`
      {
        Post(PostId: "${postid}") {
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

  LikedPost = async postId => {
    let query = gql`
    mutation {
      LikePost(PostId: "${postId}") {
        Liked
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
      console.log('Majid', error);
    }
  };

  closePost = async id => {
    let query = gql`
      mutation {
        PostClose(data: {PostId: "${id}", GaveUp: "${true}"}){
          _id
          Distance
          Description
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
      console.log('Majid', error);
    }
  };

  editPost = async (id, Subject, Description, type, lat, long, dist) => {
    console.log(id, Subject, Description, type, lat, long, dist)
    let Type = parseInt(type);
    let price = parseInt(dist);
    let query = gql`
    mutation {
      PostEdit(data: { PostID: "${id}", Subject: "${Subject}", Description: "${Description}", Type:"${Type}",Location: { Lat: "${lat}", Lon: "${long}" }, Price: "${price}"}) {
        _id
      Distance
      Picture
      Subject
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
  ConversationList = async () => {
    let query = gql`
      {
        Conversations {
          _id
          Messages {
            _id
            Text
            Sender {
              _id
              Email
              Name
              Photo
            }
            Status
            CreatedAt
          }
          Participants {
            _id
            Name
            Rating
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
  userData = async () => {
    let query = gql`
    {
      Profile {
        _id
        Name
        Email
        Rating
        Photo
      }}
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

  getAllPost = async (distance, lat, long) => {
    console.log(distance,lat,long)
    let dist = parseInt(distance);
    let query = gql`
    {
      Posts (data: {
        MaxDistance: ${dist}
        Location: {
          Lat: "${lat}"
          Lon: "${long}"
        }
      }){
        _id
        Distance
        Description
        Price
        Picture
        Activated
        GaveUp
        Type
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
      let token = await AsyncStorage.getItem('token');
      let data = await new ApolloClient({
        uri: 'https://api.gotoapp.io/graphql',
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      }).query({query});
      if (data) {
        console.log("data",data)
        return data;
      }
      console.log('TCL: login -> data', data);
    } catch (error) {
      console.log('Majid', error);
    }
  }; 

  createPost = async (Subject, Description, price, lat, lng, Picture, Type) => {
    console.log(Subject, Description, lat, lng);

    let dist = parseInt(price);
    let query = gql`
      mutation {
        PostCreate(
          data: {
            Subject: "${Subject}"
            Description: "${Description}"
            Price: ${dist}
            Location: {Lat: "${lat}", Lon: "${lng}"}
            Picture: "${'data:image/JPEG;base64,' + Picture}"
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
  Conversation = async chat_id => {
    console.log(chat_id);
    let query = gql`
     {
      Conversation(ChatId: "${chat_id}") {
         _id
          Participants {
            _id
            Name
            Email
            Photo
          }
        Messages {
          Text
          Status
          Sender {
            _id
            Name
            Email
            Photo
          }
        }
        CreatedAt
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

  createPostPrice = async (
    Subject,
    Description,
    price,
    lat,
    lng,
    Picture,
    Type,
  ) => {
    let type = parseInt(Type);
    let dist = parseInt(price);
    console.log(
      'checker',
      Subject,
      Description,
      price,
      lat,
      lng,
      Picture,
      Type,
    );
    let query = gql`
      mutation {
        PostCreate(
          data: {
            Subject: "${Subject}"
            Description: "${Description}"
            Price: ${dist}
            Location: {Lat: "${lat}", Lon: "${lng}"}
            Picture: "${'data:image/JPEG;base64,' + Picture}"
            Type: ${type}
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

  QueryRequest = async (name, photo) => {
    console.log(name, photo);
    let query = gql`
  mutation {
    EditProfile(data: {Name: "${name}",Photo:"${'data:image/JPEG;base64,' +photo}"}) {
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

  CreateConversation = async (c_user_id, p_user_id) => {
    console.log(c_user_id, p_user_id);
    let query = gql`
    mutation {
      CreateConversation(Participants: ["${c_user_id}", "${p_user_id}"]) {
        _id
        Messages {
          _id
          Text
          Status
          Sender {
            _id
            Name
            Email
            Photo
          }
          CreatedAt
        }
        Participants {
          _id
          Name
          Email
          Photo
          Rating
          Badge
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

  SendMsg = async (chat_id, msg) => {
    let query = gql`
    mutation {
      SendMessage(data: {
        ChatId: "${chat_id}"
        Text: "${msg}"
      }) {
         _id
        Text
        Status
        Sender {
          _id
          Name
          Email
          Rating
        }
        CreatedAt
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
