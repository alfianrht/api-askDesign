/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function (req, res) {
		var email = req.param('email');
		var password = req.param('password');

		if (!email || !password) {
			return res.json(401, {err: 'Email and password required'});
		} 
		
		Users.findOne({email:email}, function (err, user){
			if (!user) {
				return res.json(401, {err: 'invalid email or password'})
			}
			
			if (password != user.password){
				return res.json(401, {err: 'Password salah coy'});
			}

			else{
				user.avatar = user.avatar || 'placeholder.jpg';
				res.json({
					status: "success",
					user: user
				});
			}
		});
	},

	create: function (req, res) {
		Users.create(res.body).exec(function (err, users) {
			if (err) {
				return res.json(err.status, {err: err});
			}

			if (users) {
				res.json(200, {user: users});
			}
		});
	}
};
