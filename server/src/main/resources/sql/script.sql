USE [master]
GO
/****** Object:  Database [Auctions]    Script Date: 13/03/2024 09:35:45 ******/
CREATE DATABASE [Auctions]
 CONTAINMENT = NONE
 ON  PRIMARY
( NAME = N'Auctions', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Auctions.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON
( NAME = N'Auctions_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Auctions_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Auctions] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Auctions].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Auctions] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [Auctions] SET ANSI_NULLS OFF
GO
ALTER DATABASE [Auctions] SET ANSI_PADDING OFF
GO
ALTER DATABASE [Auctions] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [Auctions] SET ARITHABORT OFF
GO
ALTER DATABASE [Auctions] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [Auctions] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [Auctions] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [Auctions] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [Auctions] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE [Auctions] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [Auctions] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [Auctions] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [Auctions] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [Auctions] SET  ENABLE_BROKER
GO
ALTER DATABASE [Auctions] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [Auctions] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [Auctions] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [Auctions] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [Auctions] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [Auctions] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [Auctions] SET HONOR_BROKER_PRIORITY OFF
GO
ALTER DATABASE [Auctions] SET RECOVERY FULL
GO
ALTER DATABASE [Auctions] SET  MULTI_USER
GO
ALTER DATABASE [Auctions] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [Auctions] SET DB_CHAINING OFF
GO
ALTER DATABASE [Auctions] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF )
GO
ALTER DATABASE [Auctions] SET TARGET_RECOVERY_TIME = 60 SECONDS
GO
ALTER DATABASE [Auctions] SET DELAYED_DURABILITY = DISABLED
GO
EXEC sys.sp_db_vardecimal_storage_format N'Auctions', N'ON'
GO
ALTER DATABASE [Auctions] SET QUERY_STORE = OFF
GO
USE [Auctions]
GO
/****** Object:  Table [dbo].[Auctions]    Script Date: 13/03/2024 09:35:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Auctions](
    [id_auctions] [int] IDENTITY(1,1) NOT NULL,
    [auctions_date] [datetime] NOT NULL,
    [auctions_amount] [int] NOT NULL,
    [id_article] [int] NOT NULL,
    [id_user] [int] NOT NULL,
    CONSTRAINT [enchere_pk] PRIMARY KEY CLUSTERED
(
[id_auctions] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY]
    GO
/****** Object:  Table [dbo].[Categories]    Script Date: 13/03/2024 09:35:45 ******/
    SET ANSI_NULLS ON
    GO
    SET QUOTED_IDENTIFIER ON
    GO
CREATE TABLE [dbo].[Categories](
    [id_category] [int] IDENTITY(1,1) NOT NULL,
    [libelle] [varchar](30) NOT NULL,
    CONSTRAINT [categorie_pk] PRIMARY KEY CLUSTERED
(
[id_category] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY]
    GO
/****** Object:  Table [dbo].[Selled_Articles]    Script Date: 13/03/2024 09:35:45 ******/
    SET ANSI_NULLS ON
    GO
    SET QUOTED_IDENTIFIER ON
    GO
CREATE TABLE [dbo].[Selled_Articles](
    [id_article] [int] IDENTITY(1,1) NOT NULL,
    [article_name] [varchar](30) NOT NULL,
    [description] [varchar](300) NOT NULL,
    [auctions_begin_date] [date] NOT NULL,
    [auction_end_date] [date] NOT NULL,
    [initial_price] [int] NULL,
    [sell_price] [int] NULL,
    [user_id] [int] NOT NULL,
    [id_category] [int] NOT NULL,
    [image] [varchar](1000) NOT NULL,
    CONSTRAINT [selled_articles_pk] PRIMARY KEY CLUSTERED
(
[id_article] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY]
    GO
/****** Object:  Table [dbo].[Users]    Script Date: 13/03/2024 09:35:45 ******/
    SET ANSI_NULLS ON
    GO
    SET QUOTED_IDENTIFIER ON
    GO
CREATE TABLE [dbo].[Users](
    [id_user] [int] IDENTITY(1,1) NOT NULL,
    [pseudo] [varchar](30) NOT NULL,
    [firstname] [varchar](30) NOT NULL,
    [lastname] [varchar](30) NOT NULL,
    [email] [varchar](50) NOT NULL,
    [phone] [varchar](15) NULL,
    [road] [varchar](30) NOT NULL,
    [zip] [varchar](10) NOT NULL,
    [city] [varchar](50) NOT NULL,
    [password] [varchar](500) NOT NULL,
    [credit] [int] NULL,
    [role] [varchar](15) NOT NULL,
    CONSTRAINT [user_pk] PRIMARY KEY CLUSTERED
(
[id_user] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY]
    GO
/****** Object:  Table [dbo].[Withdrawal]    Script Date: 13/03/2024 09:35:45 ******/
    SET ANSI_NULLS ON
    GO
    SET QUOTED_IDENTIFIER ON
    GO
CREATE TABLE [dbo].[Withdrawal](
    [id_article] [int] NOT NULL,
    [road] [varchar](30) NOT NULL,
    [zip] [varchar](15) NOT NULL,
    [city] [varchar](30) NOT NULL,
    CONSTRAINT [retrait_pk] PRIMARY KEY CLUSTERED
(
[id_article] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY]
    GO
ALTER TABLE [dbo].[Auctions]  WITH CHECK ADD  CONSTRAINT [encheres_no_article_fk] FOREIGN KEY([id_article])
    REFERENCES [dbo].[Selled_Articles] ([id_article])
    GO
ALTER TABLE [dbo].[Auctions] CHECK CONSTRAINT [encheres_no_article_fk]
    GO
ALTER TABLE [dbo].[Auctions]  WITH CHECK ADD  CONSTRAINT [encheres_utilisateur_fk] FOREIGN KEY([id_user])
    REFERENCES [dbo].[Users] ([id_user])
    GO
ALTER TABLE [dbo].[Auctions] CHECK CONSTRAINT [encheres_utilisateur_fk]
    GO
ALTER TABLE [dbo].[Selled_Articles]  WITH CHECK ADD  CONSTRAINT [articles_vendus_categories_fk] FOREIGN KEY([id_category])
    REFERENCES [dbo].[Categories] ([id_category])
    GO
ALTER TABLE [dbo].[Selled_Articles] CHECK CONSTRAINT [articles_vendus_categories_fk]
    GO
ALTER TABLE [dbo].[Selled_Articles]  WITH CHECK ADD  CONSTRAINT [ventes_utilisateur_fk] FOREIGN KEY([user_id])
    REFERENCES [dbo].[Users] ([id_user])
    GO
ALTER TABLE [dbo].[Selled_Articles] CHECK CONSTRAINT [ventes_utilisateur_fk]
    GO
ALTER TABLE [dbo].[Withdrawal]  WITH CHECK ADD  CONSTRAINT [retrait_article_fk] FOREIGN KEY([id_article])
    REFERENCES [dbo].[Selled_Articles] ([id_article])
    GO
ALTER TABLE [dbo].[Withdrawal] CHECK CONSTRAINT [retrait_article_fk]
    GO
    USE [master]
    GO
ALTER DATABASE [Auctions] SET  READ_WRITE
GO