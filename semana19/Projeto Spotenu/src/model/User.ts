import { InvalidParameterError } from "../errors/InvalidParameterError";

export class User {
  constructor(
    private id: string,
    private name?: string,
    private nickname?: string,
    private email?: string,
    private password?: string,
    private role?: UserRole
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string | undefined {
    return this.name;
  }

  public getNickname(): string | undefined {
    return this.nickname;
  }

  public getEmail(): string | undefined {
    return this.email;
  }

  public getPassword(): string | undefined {
    return this.password;
  }

  public getRole(): UserRole | undefined {
    return this.role;
  }
}

export const stringToUserRole = (input: string): UserRole => {
  switch (input) {
    case "BAND":
      return UserRole.BAND;
    case "LISTENERNOPAYING":
      return UserRole.LISTENERNOPAYING;
    case "LISTENERPAYING":
      return UserRole.LISTENERPAYING;
    case "ADMIN":
      return UserRole.ADMIN
    default:
      throw new InvalidParameterError("Invalid user role");
  }
};

export enum UserRole {
  BAND = "BAND",
  LISTENERNOPAYING = "LISTENERNOPAYING",
  LISTENERPAYING = "LISTENERNOPAYING",
  ADMIN = "ADMIN",
}
