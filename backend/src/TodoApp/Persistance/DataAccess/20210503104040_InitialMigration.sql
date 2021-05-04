IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [TaskStates] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(max) NOT NULL,
    [Description] nvarchar(max) NULL,
    [FontColor] nvarchar(max) NULL,
    [BackgroundColor] nvarchar(max) NULL,
    CONSTRAINT [PK_TaskStates] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Tasks] (
    [Id] int NOT NULL IDENTITY,
    [CreationDate] datetime2 NOT NULL,
    [ModificationDate] datetime2 NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [Description] nvarchar(max) NULL,
    [TaskStateId] int NOT NULL,
    CONSTRAINT [PK_Tasks] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Tasks_TaskStates_TaskStateId] FOREIGN KEY ([TaskStateId]) REFERENCES [TaskStates] ([Id]) ON DELETE NO ACTION
);
GO

CREATE INDEX [IX_Tasks_TaskStateId] ON [Tasks] ([TaskStateId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20210503104040_InitialMigration', N'5.0.5');
GO

COMMIT;
GO

