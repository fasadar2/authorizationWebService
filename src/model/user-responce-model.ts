export class UserResponceModel
{
  id: number;
  firstName: string;
  secondName: string;
  thirdName: string;
  phone: string;
  lastEntry: string;
  role: {
    id: number;
    role: string;
  };
  organization: null | string;
  qualification: null | string;
  constructor(id: number,
              firstName: string,
              secondName: string,
              thirdName: string,
              phone: string,
              lastEntry: string,
              role: { id: number, role: string},
              organization: null | string,
              qualification: null | string)
  {
    this.id = id
    this.firstName = firstName
    this.secondName = secondName
    this.thirdName = thirdName
    this.phone = phone
    this.lastEntry = lastEntry
    this.role = role
    this.organization = organization
    this.qualification =qualification
  }
}
