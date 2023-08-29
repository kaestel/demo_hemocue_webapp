Util.Objects["page"] = new function() {
	this.init = function(page) {

		// MAIN ELEMENTS
		// header element
		page.hN = u.qs("#header", page);
		page.hN.page = page;
		// content element
		page.cN = u.qs("#content", page);
		page.cN.page = page;
		
		// navigation element
		page.nN = u.qs("#navigation", page);
		if(page.nN) {
			// move Navigation into Header and fade-in
			page.nN = page.hN.appendChild(page.nN);
			
			u.as(page.nN, "display", "block");
			page.nN.page = page;
		}
		// footer element
		page.fN = u.qs("#footer", page);
		page.fN.page = page;


		if(navigator.standalone === true) {
			u.ac(document.body, "app");
		}


		u.e.drag(page, page);



		page._login = u.qs(".scene.login", page);
		page._login.page = page;
		page._presentation = u.qs(".scene.presentation", page);
		page._presentation.page = page;
		page._add = u.qs(".scene.add", page);
		page._add.page = page;
		page._list = u.qs(".scene.list", page);
		page._list.page = page;
		page._feedback = u.qs(".scene.feedback", page);
		page._feedback.page = page;

		// page is ready
		u.ac(page, "ready");



		page.showList = function() {

			u.as(this._list, "display", "block");
			u.a.transition(this._list, "all 0.5s ease-in");
			u.a.setOpacity(this._list, 1);

			var presentations = u.qsa(".list li", this._list);
			for(i = 0; pres = presentations[i]; i++) {

				pres.page = this;
				u.e.click(pres);

				pres.clicked = function() {

					this.page._list.transitioned = function() {
						this.transitioned = null;

						u.as(this.page._list, "display", "none");
						this.page.showPresentation();
					}


					u.a.transition(this.page._list, "all 0.5s ease-in");
					u.a.setOpacity(this.page._list, 0);
					
				}
			}

			var add = u.qs(".actions li", this._list);
			add.page = page;
			u.ce(add);

			add.clicked = function(event) {
				u.e.kill(event);

				this.page._list.transitioned = function() {
					this.transitioned = null;

					u.as(this.page._list, "display", "none");
					this.page.showAdd();
				}


				u.a.transition(this.page._list, "all 0.5s ease-in");
				u.a.setOpacity(this.page._list, 0);

			}
		}

		page.showPresentation = function() {

			u.as(this._presentation, "display", "block");
			u.a.transition(this._presentation, "all 0.5s ease-in");
			u.a.setOpacity(this._presentation, 1);

			u.ac(document.body, "pres");

			var close = u.qs(".close", this._presentation);
			close.page = page;
			u.ce(close);

			close.clicked = function(event) {
				u.e.kill(event);

				this.page._presentation.transitioned = function() {
					this.transitioned = null;

					u.as(this.page._presentation, "display", "none");
					u.rc(document.body, "pres");
					this.page.showList();
				}

				u.a.transition(this.page._presentation, "all 0.5s ease-in");
				u.a.setOpacity(this.page._presentation, 0);

			}


			var feedback = u.qs(".feedback", this._presentation);
			feedback.page = page;
			u.ce(feedback);

			feedback.clicked = function(event) {

				u.a.transition(this.page._feedback, "none");
				u.a.translate(this.page._feedback, 0, -1000);
				u.as(this.page._feedback, "display", "block");

				u.a.transition(this.page._feedback, "all 0.5s ease-in");
				u.a.translate(this.page._feedback, 0, 0);


				var actions = u.qsa(".actions li", this.page._feedback);
				for(i = 0; action = actions[i]; i++) {

					action.page = this.page;
					u.e.click(action);

					action.clicked = function() {

						this.page._feedback.transitioned = function() {
							this.transitioned = null;

							u.as(this.page._feedback, "display", "none");
						}


						u.a.transition(this.page._feedback, "all 0.5s ease-in");
						u.a.translate(this.page._feedback, 0, -1000);

					}
				}
			}


			var pres = u.qs("ul.presentation");
			u.e.swipe(pres, pres);
			u.a.translate(pres, 0, 0);
			pres.i = 0;

			pres.picked = function() {
				u.a.transition(this, "none");
			}
			pres.moved = function() {
				u.a.translate(this, this.current_x, 0);
			}
			pres.dropped = function() {}
			pres.swipedLeft = function() {
				if(this.i < 2) {
					this.i++;
				}
				u.a.transition(this, "all 0.3s ease-out");
				u.a.translate(this, -(1024*this.i), 0);
			}
			pres.swipedRight = function() {
				if(this.i > 0) {
					this.i--;
				}

				u.a.transition(this, "all 0.3s ease-out");
				u.a.translate(this, -(1024*this.i), 0);

//				u.a.translate(this, this.current_x, 0);
			}
		}

		page.showAdd = function() {

			u.as(this._add, "display", "block");
			u.a.transition(this._add, "all 0.5s ease-in");
			u.a.setOpacity(this._add, 1);

			var actions = u.qsa(".list li .button", this._add);
			for(i = 0; action = actions[i]; i++) {

				action.page = this;
				u.ce(action);

				action.clicked = function() {
					if(u.tc(this, "add", "remove").match("add")) {
						this.innerHTML = "Add";
						u.rc(this.parentNode.parentNode.parentNode, "added");
					}
					else {
						this.innerHTML = "Remove";
						u.ac(this.parentNode.parentNode.parentNode, "added");
					}
				}
			}


			var done = u.qs(".actions li", this._add);
			done.page = page;
			u.ce(done);

			done.clicked = function(event) {
				u.e.kill(event);

				this.page._add.transitioned = function() {
					this.transitioned = null;

					u.as(this.page._add, "display", "none");
					this.page.showList();
				}

				u.a.transition(this.page._add, "all 0.5s ease-in");
				u.a.setOpacity(this.page._add, 0);

			}
	
		}



		// go to frontpage
		if(!navigator.onLine) {
			page.showList();
		}
		// show login page
		else {

			page._login._submit = u.qs(".actions li");
			page._login._submit.page = page;

			u.e.click(page._login._submit);
			page._login._submit.clicked = function(event) {
				u.e.kill(event);

				this.page._login.transitioned = function() {
					this.transitioned = null;

					u.as(this.page._login, "display", "none");
					this.page.showList();
				}

				u.a.transition(this.page._login, "all 0.5s ease-in");
				u.a.setOpacity(this.page._login, 0);
			}

			u.as(page._login, "display", "block");
			u.a.transition(page._login, "all 0.5s ease-in");
			u.a.setOpacity(page._login, 1);
		}
	}
}

window.onload = u.init;
