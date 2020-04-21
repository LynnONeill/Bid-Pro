const MongoDB = require("../models/mongo_models");
const genHTML = require("../genHTML.js");
const convertFactory = require("electron-html-to");
const fs = require("fs");
require("dotenv").config();
const sgMail=require("@sendgrid/mail");

module.exports = {
    findProducts: function (req, res) {
        console.log("find products api request is firing!")
        MongoDB.SecDoor.find({})
            .then(products => {
                console.log("list of available products below")
                console.log(products)
                res.json(products)
            })
            .catch(err => {
                res.status(404).json(err);
            });
    },

    findFeatures: function (req, res) {
        console.log("find products api request is firing!")
        MongoDB.Features.find({})
            .then(features => {
                console.log("list of features below")
                console.log(features)
                res.json(features)
            })
            .catch(err => {
                res.status(404).json(err)
            });
    },

    findProjects: function (req, res) {
        MongoDB.ClientProject.find({ client_id: req.params.id })
            .then(products => {
                console.log("list of available projects below")
                console.log(products)
                res.json(products)
            })
            .catch(err => {
                res.status(404).json(err);
            });
    },

    newProject: function (req, res) {
        console.log("test")
        console.log(req.body)
        MongoDB.ClientProject.create({ client_id: req.body.id, name: req.body.name })
            .then(stuff => {
                console.log("stuff")
                MongoDB.ClientProject.find({ client_id: req.body.id })
                    .then(products => {
                        console.log("list of available projects below")
                        console.log(products)
                        res.json(products)
                    })
                    .catch(err => {
                        res.status(404).json(err);
                    });
            })
            .catch(err => {
                res.status(404).json(err);
            });
    },
    deleteProject: function (req, res) {
        console.log(req.params)
        MongoDB.ClientProject.deleteOne({ _id: req.params.id })
            .then(products => {
                console.log("list of available projects below")
                console.log(products)
                res.json(products)
            })
            .catch(err => {
                res.status(404).json(err);
            });

    },
    projectProducts: function (req, res) {
        console.log(req.params.id)
        MongoDB.ClientProduct.find({ project_id:{id:req.params.id}})
            .then(products => {
                console.log("list of available products below")
                console.log(products[0])
                res.json(products)
            })
            .catch(err => {
                res.status(404).json(err);
            });
    },

    addProduct: function (req, res) {
        console.log("add product api request is firing!")
        let newProduct = req.body;
        console.log(newProduct);

        MongoDB.ClientProduct.create(newProduct)

            .then(newProduct => {
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },

    createPDF: function (req, res) {
        console.log("createPDF is firing!");
        console.log(req.body);
        console.log(req.body.projectID)
        let email = req.body.email;
        console.log(email);
        let clientObj = {
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            phone: req.body.phoneNumber,
            email: req.body.email
        }
        MongoDB.ClientProduct.find({project_id: req.body.projectID})
            
            .then(project => {
                console.log("project find request hit")
                console.log(req.body.projectID)

                console.log("project details below")
                console.log(project)
                
            })
            .catch(err => {
                res.status(404).json(err);
            });

            // Creating pdf ////////

            let updatedHtml = genHTML.genHTML(clientObj);
            createHTML("index.html", updatedHtml);

            let conversion = convertFactory({
                converterPath: convertFactory.converters.PDF,
                allowLocalFileAccess: true
            });

            conversion({ html: updatedHtml}, function (err, result) {
                if (err) {
                    console.log("html fail")
                    return console.error(err);
                }
                console.log("PDF " + result + "successfully created!!!");
                result.stream.pipe(fs.createWriteStream(`./${clientObj.name}.pdf`));
                sgMail.setApiKey(process.env.SENDGRID_API_KEY);

                pathToAttachment = `${__dirname}/../${clientObj.name}.pdf`;
        
                attachment = fs.readFileSync(pathToAttachment).toString("base64");
        
                const msg = {
                    to: "tucsondivers@hotmail.com",
                    from: process.env.FROM_EMAIL,
                    subject: 'Project Estimate',
                    text: 'We are proud to offer the following for your consideration',
                    html: '<strong>Is this thing working???</strong>',
                    attachments: [
                        {
                          content: attachment,
                          filename: `${clientObj.name}.pdf`,
                          type: "application/pdf",
                          disposition: "attachment"
                        }
                      ]
                  }
                sgMail
                    .send(msg)
                    .then(() => {}, error => {
                    console.error(error);
        
                    if (error.response) {
                    console.error(error.response.body)
                    }
                });
                conversion.kill();
            });
        
    
        function createHTML(fileName, data) {
            fs.writeFile(fileName, data, 'utf8', function (err) {

                if (err) {
                    return console.log(err);
                }
                console.log("create file Success!")
        
            })

        }
        console.log("hello");
     

    }

}