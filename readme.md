# Barlak.com.tr

Welcome to the Barlak.com.tr repository! This is a personal bulletin website where only I (the owner) can post content. Below you'll find the information on how to set up and run the project.

## Technologies Used

- **HTML/CSS/JS**
- **Node.js**
- **Express.js**
- **TailwindCSS**
- **MongoDB**
- **Mongoose**
- **Bcrypt** (for hashing passwords)
- **EJS** (as the view engine)
- **XSS** (for sanitization)

## Setup

Before running the application, make sure to install the required dependencies and set up environment variables.

1. **Install Dependencies**

   Navigate to the root directory of the project and run:
   ```bash
   npm install

2. **Create a .env File**

   Create a .env file in the root directory with the following variables:
   ```bash
   MONGODB_URI=your_mongodb_uri
   SESSION_SECRET=your_session_secret
   PORT=your_port_number

3. **Run the Application**

   To start the application, run:
   ```bash
   node app.js

4. **Run TailwindCSS Watcher**

   To start the TailwindCSS watcher, run:
   ```bash
   npx tailwindcss -i ./views/partials/statics/input.css -o ./views/partials/statics/index.css --watch

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact me at aliravzabarlak@gmail.com.
   
