export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  full_name: string;
  address: string;
  phone_number: string;
  photo: string;
}

export let userData: User[] = [
  {
    id: 1,
    username: 'chika_takami',
    email: 'chikatakami@gmail.com',
    password: 'test12345',
    full_name: 'Chika Takami',
    address: 'Uranohoshi Beach',
    phone_number: '081918095733',
    photo: 'https://images.genius.com/020b41cda2f6d2b48be4f2d5a632a8d9.1000x1000x1.jpg'
  }
]
