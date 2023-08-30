const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const data = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456tian_",
  database: "music4u"
});

app.post("/login", (req, res) => {
  const username = req.body.Username;
  const password = req.body.Passwords;
  data.query("SELECT * FROM users WHERE Username = ? AND Passwords = ? AND UserRole = 'Admin' ", [username, password], 
  (err, result) => {
    if(err){
        console.log(err);
    }
    if(result.length > 0){
      res.send(result);
    }else{
      res.send({message: "Incorrect username or password plese try again"})
    }
  }
  );
});

// Product Part
app.post("/insertMusic", (req, res) => {
  const musicid = req.body.musicid;
  const musicname = req.body.musicname;
  const author = req.body.author;
  const spotify = req.body.spotify;
  const apple = req.body.apple;
  const joox = req.body.joox;
  const mv = req.body.mv;
  data.query("INSERT INTO music (MusicID, MusicName, Author, Spotify, Apple, Joox, MV) VALUES(?, ?, ?, ?, ?, ?, ?)",
  [musicid, musicname, author, spotify, apple, joox, mv],
  (err, result) => {
    if(err){
      console.log(err);
    }else{
      res.send("New music has been add");
    }
  }
  );
})

app.get("/musics", (req, res) => {
  let type = req.query.type;
  let search = req.query.search;
  if(!type || !search){
    data.query("SELECT * FROM music", (err, result) => {
      if(err){
          console.log(err);
      }else{
          res.send(result);
      }
  });
  }else{
    if(type == "MusicID"){
      data.query(`SELECT * from music where ${type} = "${search}"`, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
      });
    }
    else{
      data.query(`SELECT * from music where ${type} like "%${search}%"`, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
      });
    }
  }
});

app.put("/updateMusicID", (req, res) => {
  const id = req.body.id;
  const MusicID = req.body.MusicID;
  data.query("UPDATE music SET MusicID = ? WHERE MusicID = ?",[MusicID, id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/updateMusicName", (req, res) => {
  const id = req.body.id;
  const MusicName = req.body.MusicName;
  data.query("UPDATE music SET MusicName = ? WHERE MusicID = ?",[MusicName, id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/updateAuthor", (req, res) => {
  const id = req.body.id;
  const Author = req.body.Author;
  data.query("UPDATE music SET Author = ? WHERE MusicID = ?",[Author, id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/updateSpotify", (req, res) => {
  const id = req.body.id;
  const Spotify = req.body.Spotify;
  data.query("UPDATE music SET Spotify = ? WHERE MusicID = ?",[Spotify, id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/updateApple", (req, res) => {
  const id = req.body.id;
  const Apple = req.body.Apple;
  data.query("UPDATE music SET Apple = ? WHERE MusicID = ?",[Apple, id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/updateJoox", (req, res) => {
  const id = req.body.id;
  const Joox = req.body.Joox;
  data.query("UPDATE music SET Joox = ? WHERE MusicID = ?",[Joox, id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/updateMV", (req, res) => {
  const id = req.body.id;
  const MV = req.body.MV;
  data.query("UPDATE music SET MV = ? WHERE MusicID = ?",[MV, id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
  );
});

app.delete("/deleteMusic/:MusicID", (req, res) => {
  const MusicID = req.params.MusicID;
  data.query("DELETE FROM music WHERE MusicID = ?", MusicID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//User Part
app.post("/insert", (req, res) => {
    const userid = req.body.userid;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;

    data.query("INSERT INTO users (UserID, Firstname, Lastname, Username, Passwords, UserRole) VALUES(?, ?, ?, ?, ?, ?)",
    [userid, firstname, lastname, username, password, role],
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send("New user has inserted");
        }
    }
    );
});

app.get("/users", (req, res) => {
  let type = req.query.type;
  let search = req.query.search;
  if(!type || !search){
    data.query("SELECT * FROM users", (err, result) => {
      if(err){
          console.log(err);
      }else{
          res.send(result);
      }
    });
  }else{
    if(type == "userid"){
      data.query(`SELECT * from users where ${type} = "${search}"`, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
      });
    }else{
      data.query(`SELECT * from users where ${type} like "%${search}%"`, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
      });
    }
  }
});

app.put("/updateUserID", (req, res) => {
    const id = req.body.id;
    const UserID = req.body.UserID;
    data.query("UPDATE users SET UserID = ? WHERE UserID = ?",[UserID, id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});

app.put("/updateFirstname", (req, res) => {
    const id = req.body.id;
    const Firstname = req.body.Firstname;
    data.query("UPDATE users SET Firstname = ? WHERE UserID = ?",[Firstname, id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});

app.put("/updateLastname", (req, res) => {
    const id = req.body.id;
    const Lastname = req.body.Lastname;
    data.query("UPDATE users SET Lastname = ? WHERE UserID = ?",[Lastname, id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});

app.put("/updateUsername", (req, res) => {
    const id = req.body.id;
    const Username = req.body.Username;
    data.query("UPDATE users SET Username = ? WHERE UserID = ?",[Username, id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});

app.put("/updatePassword", (req, res) => {
    const id = req.body.id;
    const Passwords = req.body.Passwords;
    data.query("UPDATE users SET Passwords = ? WHERE UserID = ?",[Passwords, id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});

app.put("/updateRole", (req, res) => {
    const id = req.body.id;
    const UserRole = req.body.UserRole;
    data.query("UPDATE users SET UserRole = ? WHERE UserID = ?",[UserRole, id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});

app.delete("/deleteUser/:UserID", (req, res) => {
    const UserID = req.params.UserID;
    data.query("DELETE FROM users WHERE UserID = ?", UserID, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.listen("3001", () => {
    console.log("Running on port 3001");
});