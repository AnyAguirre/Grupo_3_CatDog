const adminController = {
    Index: (req, res) => {
        res.render('admin/adminindex',{
            title: 'inicio admin'
        })
    }
}

module.exports = adminController;