const MongoDB = require("../models/mongo_models");
const genHTML = require("../genHTML.js");
const convertFactory = require("electron-html-to");
const fs = require("fs");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

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
            .then(projects => {
                let stuff = projects
                query(stuff, 0)
                function query(theProject, num) {
                    let theStuff = theProject
                    if (num < theStuff.length) {
                        let id = theStuff[num]._id
                        console.log(id)
                        MongoDB.ClientProduct.find({ "project_id": { "id": `${id}` } })
                            .then(products => {
                                console.log(products)
                                if (products.length === 0) {
                                } else {
                                    let total = 0;
                                    products.map(products => total += products.total.price)
                                    theStuff[num].__v = total
                                    console.log(theStuff)
                                }
                                num++
                                query(theStuff, num)
                            })
                    } if (num == theStuff.length) {
                        res.json(theStuff)
                    }
                }
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
        MongoDB.ClientProduct.find({ project_id: { id: req.params.id } })
            .then(products => {
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

    deleteProduct: function(req,res){
        console.log(req.params.id)
        MongoDB.ClientProduct.findOneAndDelete({_id:req.params.id})
            .then(del => {
                console.log(del)
                res.json(del)
            })
            .catch(err => {
                res.status(404).json(err);
            });
    },
    
    queryProducts: function (req, res) {
        console.log("queryProducts is firing");
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
            email: req.body.email,
            projectID: req.body.projectID
        }
        let productArr = [];
        MongoDB.ClientProduct.find({project_id:{id:clientObj.projectID}})
            .then(products => {
                console.log("project details below")
                console.log(products)
                console.log("project array below")
                console.log(products[0].total)
                productArr = products;
                console.log(productArr);
                console.log(products[0].product.name)
                console.log(products[0].features)

            // function to create html from product list //
            function renderProducts(products) { 
                let options =  products.features.map(feature => (
                    `<div class="card-body w-100"><p class="card-text">${feature.name} ${feature.type} ${feature.price}.00.</p></div>`
                    ))
        
                return (`<div class="card w-100">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-6 font-weight-bold">${products.product.name}</div>
                        <div class="col-md-6 text-right font-weight-bold">$${products.total.price}.00</div>
                    </div>
                </div>
                ${options.join(" ")}`
                )
            } 
             let productPrices = [];
                for( let i = 0; i < products.length; i++) {
                    productPrices.push(products[i].total.price)
                }
                let total = productPrices.reduce((a, b) => a + b, 0);
                     
                console.log("project total below");
                console.log(total)

            let sortProducts = productArr.map(renderProducts);

            let updatedHtml = genHTML.genHTML(clientObj, total, sortProducts.join(' '));
            createHTML("index.html", updatedHtml);

            let conversion = convertFactory({
                converterPath: convertFactory.converters.PDF,
                allowLocalFileAccess: true
            });
            // console.log(updatedHtml);
                conversion({ html: `${updatedHtml}`}, function (err, result) {
                    if (err) return console.error(err);
                    result.stream.pipe(fs.createWriteStream(`controllers\\${clientObj.name}.pdf`));
                    console.log("it works?")
                    conversion.kill();
                    res.send("The estimate has been sent to the client!")
                });
            })
            .catch(err => {
                res.status(404).json(err);
            });

            function createHTML(fileName, data) {
                fs.writeFile(fileName, data, 'utf8', function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("create file Success!")
                })
            }
        },


            
        sendPDF: function(req, res) {
            console.log("sendPDF request has hit the server")
            console.log(req.body.name);
            let clientObj = {
                name: req.body.name,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                phone: req.body.phoneNumber,
                email: req.body.email,
                projectID: req.body.projectID
            }
                
                sgMail.setApiKey(process.env.SENDGRID_API_KEY);

                pathToAttachment = `${__dirname}\\${clientObj.name}.pdf`;
        
                attachment = fs.readFileSync(pathToAttachment).toString("base64");
        
                const msg = {
                    to: "kodypbishop@gmail.com",
                    from: process.env.FROM_EMAIL,
                    subject: 'Project Estimate',
                    text: 'We are proud to offer the following for your consideration',
                    html: '<strong>We are proud to offer the following for your consideration.</strong>',
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
                    res.send("pdf sent")
        
                    if (error.response) {
                        console.error(error.response.body)
                    }
                });
            }

}