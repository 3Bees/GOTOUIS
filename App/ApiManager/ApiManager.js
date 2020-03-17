import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';

const client = new ApolloClient({
  uri: 'https://api.gotoapp.io/graphql',
});

export default class ApiManager {
  postComment = async (post, Comment) => {
    console.log('posting', post, Comment);
    let query = gql`
    mutation {
      CommentCreate(data: { PostId: "${post}", Text: "${Comment}" }) {
        _id
        Text
        User {
          _id
          Name
          Email
          Photo
          Rating
          Badge
        }
        Reply {
          Text
          User {
            _id
            Name
            Email
            Photo
            Rating
            Badge
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
        console.log("data>>>>>>>>>>>",data)
        return data;
      }
    } catch (error) {
      error.map((item)=>{
        console.log("data>>>>>>>>>>>error",item.Error)
      })
      alert(error);
    }
  };

  UserPost = async id => {
    console.log('id,id', id);
    let query = gql`
    {
      UserPosts(UserId: "${id}") {
        _id
        Distance
        Subject
        Description
        Type
        CommentsCount
        Picture
        Price
        Location {
          Lat
          Lon
        }
        User{
          _id 
          Name
          Photo
        }
        Likes
        CreatedAt
        UpdatedAt
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
    } catch (error) {
      alert(error);
    }
  };

  UserProfile = async id => {
    console.log('id', id);
    let query = gql`
      {
        Profile(UserId: "${id}") {
          _id
          Name
          Email
          Photo
          Rating
          Badge
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
    } catch (error) {
      alert(error);
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
        Type
        CreatedAt
        UpdatedAt
        User {
          _id
          Name
          Email
          Photo
          Rating
        }
        Location{
          Lat
          Lon
        }
        Comments {
          _id
          Text
          User {
            _id
            Name
            Photo
          }
          Reply {
            _id
            Text
            User {
              _id,
              Name
            }
          }
        }
        CommentsCount
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
        console.log("data>>>>>>>>>>>>>>>>>>>>>>>",data.data.Post.Comments)
        return data;
      }
    } catch (error) {
      alert('Majid', error);
    }
  };

  interactWithPost = async postid => {
    let query = gql`
      {
        UsersInteractPost(PostId: "5e5f906768596911f31d55e6") {
          _id
          Name
          Photo
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
    } catch (error) {
      alert(error);
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
    } catch (error) {
      alert(error);
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
    } catch (error) {
      alert(error);
    }
  };

  EvaluteUser = async (postid, user_id, rating) => {
    let rate = parseInt(rating);
    let query = gql`
    mutation {
      EvaluateUser(
        data: {
          UserId: "${postid}"
          PostId: "${user_id}"
          Rating:${rating}
        }
      ) {
       Rating
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
    } catch (error) {
      alert(error);
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
    } catch (error) {
      alert(error);
    }
  };

  closePost = async id => {
    let query = gql`
      mutation {
        PostClose(data: {PostId: "5e5f906768596911f31d55e6", GaveUp: true}) {
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
    } catch (error) {
      alert(error);
    }
  };

  editPost = async (
    id,
    Subject,
    Description,
    type,
    lat,
    long,
    dist,
    Picture,
  ) => {
    let Type = parseInt(type);
    let Price = parseFloat(dist);
    let query = gql`
    mutation {
      PostEdit(data: { PostID: "${id}", Subject: "${Subject}", Description: "${Description}", Type: ${Type},Location: { Lat: "${lat}", Lon: "${long}" }, Price: ${Price},Picture: "${'data:image/JPEG;base64,' +
      Picture}" }) {
        _id
        Distance
        Subject
        Description
        Type
        CommentsCount
        Price
        Activated
        GaveUp
        Picture
        Location {
          Lat
          Lon
        }
        Likes
        CreatedAt
        UpdatedAt
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
    } catch (error) {
      alert(error);
    }
  };

  notification = async () => {
    let query = gql`
      {
        Notifications {
          _id
          User {
            _id
            Name
          }
          Participant {
            _id
            Name
          }
          Text
          ResourceId
          Type
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
    } catch (error) {
      alert(error);
    }
  };
  ConversationList = async () => {
    let query = gql`
      {
        Conversations {
          _id
          Participants {
            _id
            Name
            Photo
          }
          LastMessage {
            _id
            Text
            Status
            Sender {
              _id
              Name
            }
            CreatedAt
          }
          UnreadMessages
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
    } catch (error) {
      alert(error);
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
    } catch (error) {
      alert(error);
    }
  };

  getAllPost = async (distance, lat, long) => {
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
        Subject
        Description
        Price
        Location{
          Lat
          Lon
        }
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
          Rating
        }
        Likes
        Type
        CommentsCount
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
    } catch (error) {
      alert(error);
    }
  };

  createPost = async (Subject, Description, price, lat, lng, Picture, Type) => {
    let type = parseInt(Type);
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
    } catch (error) {
      alert(error);
    }
  };
  Conversation = async chat_id => {  
    let token = await AsyncStorage.getItem('token');
    let query = gql` {
      NewMessage(ChatId: "${chat_id}", Token: "${`Bearer` +token}") {
        _id
        Text
        Status
        Sender {
          _id
          Name
        }
        CreatedAt
      }
    }
  `;
    try {
    
      let data = await new ApolloClient({
        uri: 'https://api.gotoapp.io/graphql',
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      }).query({query});
      if (data) {
        return data;
      }
    } catch (error) {
      alert('Majid', error);
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
    } catch (error) {
      alert(error);
    }
  };

  QueryRequest = async (name, photo) => {
    let query = gql`
  mutation {
    EditProfile(data: {Name: "${name}",Photo:"${'data:image/jpeg;base64,' +
      photo}"}) {
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
    } catch (error) {
      alert(error);
    }
  };

  CreateConversation = async (c_user_id, p_user_id) => {
    let query = gql`
    mutation {
      CreateConversation(Participants: ["${c_user_id}", "${p_user_id}"]) {
        _id
        LastMessage {
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
        CreatedAt
        UnreadMessages
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
