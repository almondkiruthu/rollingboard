# RollingBoard: Project Management System

RollingBoard is a streamlined, open-source project management platform designed specifically for the needs of **small to medium-sized enterprises (SMEs)** and **startups**. It aims to enhance productivity by providing an intuitive, cost-effective, and customizable tool without the complexity and high cost of mainstream project management solutions.

The core problem RollingBoard addresses is that many existing tools are too expensive and bloated with features unnecessary for smaller teams, which can hinder workflows and create financial strain. This project offers a simple, powerful, and flexible alternative that supports effective project management for resource-constrained organizations.

-----

## System Architecture

The following diagrams provide a high-level overview of the system's architecture and data flow.

### Context Diagram (Level 0 DFD)

This diagram illustrates the primary external entities that interact with the RollingBoard system and the main flow of information between them.
<img width="1379" height="702" alt="rollingboard-level-0-dfd" src="https://github.com/user-attachments/assets/65c81d24-e800-4f46-928a-e518882bbf83" />

### Level 1 Data Flow Diagram (DFD)

This diagram breaks down the main processes within the RollingBoard system, showing how data moves between different components like user management, project handling, and task tracking.

<img width="1455" height="1368" alt="rollingboard-level-1-dfd" src="https://github.com/user-attachments/assets/d2629bad-e9a1-4c60-b05e-255752436d03" />


-----

## Key Features ✨

  * **Workspace Management**: Create and switch between multiple workspaces to organize different teams or company departments.
  * **Project & Task Tracking**: Easily create projects, assign tasks, set deadlines, and monitor progress through an intuitive dashboard.
  * **Project Analytics**: Visualize project progress and team productivity with a dedicated analytics dashboard.
  * **User-Friendly Interface**: A clean, minimalist UI designed to eliminate clutter and keep teams focused.
  * **Secure Authentication**: Users can sign up and log in using Google, GitHub, or a traditional email and password.

-----

## Tech Stack 🛠️

  * **Framework**: Next.js (React)
  * **Backend API**: Hono
  * **Language**: TypeScript
  * **Database & Backend Services**: Appwrite (Cloud Database, Authentication, Storage)
  * **Styling**: Tailwind CSS & shadcn UI
  * **Data Fetching/State Management**: Tanstack React Query & Nuqs (URL-based)
  * **Deployment**: Vercel

-----

## Getting Started

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/almondkiruthu/rollingboard.git
    ```
2.  **Install NPM packages:**
    ```sh
    npm install
    ```
3.  **Set up your environment variables:**
    Create a `.env.local` file and add the necessary Appwrite configuration keys.
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
