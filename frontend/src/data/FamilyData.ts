
export type FamilyData = {
    id: number;
    name: string;
    parentIds: number[];
    age: number;
    role: string;
    gender: "male" | "female";
};

export const familyData: FamilyData[] = [
    { id: 1, name: "John", parentIds: [], age: 70, role: "grandfather", gender: "male" },
    { id: 2, name: "Mary", parentIds: [], age: 68, role: "grandmother", gender: "female" },
    { id: 3, name: "Robert", parentIds: [1, 2], age: 45, role: "father", gender: "male" },
    { id: 4, name: "Linda", parentIds: [1, 2], age: 43, role: "mother", gender: "female" },
    { id: 5, name: "Michael", parentIds: [3, 4], age: 20, role: "uncle", gender: "male" },
    { id: 6, name: "Emily", parentIds: [3, 4], age: 18, role: "auntie", gender: "female" },
    { id: 7, name: "David", parentIds: [3, 4], age: 15, role: "cousin", gender: "male" },
    { id: 8, name: "Sarah", parentIds: [3, 4], age: 12, role: "cousin", gender: "female" },
    { id: 9, name: "James", parentIds: [5], age: 5, role: "brother", gender: "male" }
];