﻿namespace UseCases.TaskCrud.Contracts
{
    public class TaskStateCommandDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string FontColor { get; set; }
        public string BackgroundColor { get; set; }
    }
}
