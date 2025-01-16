class Group {
  id?: string;
  name: string;
  description: string;
  adminId: string;

  constructor(id: string, name: string, description: string, adminId: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.adminId = adminId;
  }
}

export default Group;
