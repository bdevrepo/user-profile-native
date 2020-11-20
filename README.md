# user-profile-native

user-profile-native

## Installation

```sh
npm install @bdevrepo/user-profile-native
```

## Usage

```js
import { 
    User,
    UserGridMenu,
    UserProfile,
    NavProfile,
    AccountDashboard} from "@bdevrepo/user-profile-native";

// ...
/*   Default props  */
const listDocType= [{ label: 'Bilhete de Identidade', value: 'BI' },
        { label: 'Cartão Nacional de Identificação', value: 'CNI' },
    { label: 'Passaporte', value: 'Passaporte' },];

const listCountry= [{ label: 'Angola', value: 'Angola' },
    { label: 'Cabo Verde', value: 'Cabo Verde' },
    { label: 'Moçambique', value: 'Moçambique' },
    { label: 'Holanda', value: 'Holanda' },
    ];


<User listDocType={listDocType} 
      listCountry={listCountry}
      parentUser={YourCallBackFunction.bind(this)}/>


const listApp= [{
        id: 1, name: 'Sua conta',
        appLogo: '',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        id: 2, name: 'Propriedade intelectual ',
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        id: 3, name: 'Trade App',
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },];


<UserGridMenu listApp={listApp}/>

<AccountDashboard parentDash={YourCallBackFunction.bind(this)}/>

const userDetail= {
        name: "Angelo Correia",
        email: "angelocorreia27@hotmail.com",
        avatar_url: ''
    }
<UserProfile userDetail={userDetail}/>

// Exemplo de Rotas a criar

<Stack.Navigator>
    <Stack.Screen name="AccountDashboard" component={AccountDashboard} options={{headerShown: false}}/>
    <Stack.Screen name="Logout" component={Logout} options={{headerShown: false}}/>
</Stack.Navigator>

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
