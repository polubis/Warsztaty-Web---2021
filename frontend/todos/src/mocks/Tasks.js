import { TasksStates } from "./TasksStates";

export const Tasks = [
  {
    id: 0,
    creationDate: "2021-02-01T00:00:00",
    modificationDate: "2021-04-01T00:00:00",
    name: "Learn ASP.NET fundmantals",
    description:
      "Learn how to write web backend using ASP.NET .NET 5 framework.",
    taskState: TasksStates[0],
  },
  {
    id: 1,
    creationDate: "2019-04-01T00:00:00",
    modificationDate: "2019-04-01T00:00:00",
    name: "Wyniesc smieci",
    description: "",
    taskState: TasksStates[1],
  },
];
