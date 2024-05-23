const Controller = require("../controllers/controller");
const router = require('express').Router();

//Get dan Post Register
router.get('/register', Controller.renderRegister)
router.post('/register', Controller.handlerRegister)

//Get dan Post Login
router.get('/login', Controller.renderLogin)
router.post('/login', Controller.handlerLogin)

router.use(function (req, res, next) {
    console.log(req.session);
    if(!req.session.userId) {
        const error = 'Please login first!'
        res.redirect(`/login?errors=${error}`)
    } else {
        next()
    }
    
})
// router.get('/', Controller.home);

router.get('/logout', Controller.getLogout)


router.get('/users/profile', Controller.userProfile);

router.get('/users/edit/:id', Controller.renderEditUser);
router.post('/users/edit/:id', Controller.handlerEditUser);
router.post('/updateProfile', Controller.updateProfile);

router.get('/posting', Controller.renderAddPosting);
router.post('/posting', Controller.handlerAddPosting);

router.get('/posting/like/:id', Controller.likePosting);
router.get('/posting/users/:id', Controller.userPosting);


router.get('/beranda', Controller.beranda)


router.use(function (req, res, next) {
    console.log(req.session);
    if(req.session.userId && req.session.role !== "Admin") {
        const error = 'Kamu bukan admin, tidak ada akses'
        res.redirect(`/login?errors=${error}`)
    } else {
        next()
    }
    
})

router.get('/users', Controller.users);

router.get('/users/delete/:id', Controller.deleteUser)


router.get('/tags', Controller.renderTag);

router.get('/addTag', Controller.addTag)
router.post('/tags', Controller.handlerTag);






module.exports = router;