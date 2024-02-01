import { Injectable } from "@nestjs/common";

// This should be a real class/interface representing a User entity
interface User {
    id: number;
    username: string;
    password: string;
}

@Injectable()
export class UserService {
  private readonly User = [
    {
      id: 1,
      username: "john",
      password: "changeme",
    },
    {
      id: 2,
      username: "maria",
      password: "guess",
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.User.find(User => User.username === username);
  }
}