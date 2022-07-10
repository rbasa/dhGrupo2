const fs = require('fs');
const path = require('path')

const dbUsers = path.join(__dirname, '../database/usuarios.json');

const readJsonFile = (path) => {
  const data = fs.readFileSync(path, 'utf-8');
  const dataParse = JSON.parse(data);
  return dataParse;
};

const User = {
    filename: path.join(__dirname, '../database/usuarios.json'),
    getData: function(){
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'))
    },
    findAll: function(){
        return this.getData()
    },
    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => user.id === id)
        return userFound
    },
    generateID: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        return lastUser ? lastUser.id + 1 : 1
    },
    findByField: function(field, value){
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => user[field] === value)
        return userFound
    },
    create: function(userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateID(),
            ...userData    
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(e =>  e.id !== id)
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

module.exports = User;
