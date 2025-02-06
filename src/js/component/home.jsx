import React from "react";
import Navbar from "./navbar";
import Jumbotrom from "./jumbotrom";
import Footer from "./footer";
import Card from "./card";




const Home = () => {



	return (
		<div className="container">
			<div className="text-center">
				<div>
					<Navbar />
					<div className="container">
					<Jumbotrom />
						<div className="row">
							<div class="col-12  col-md-6 col-lg-3">
								<Card />
							</div>
							<div class="col-12  col-md-6 col-lg-3">
								<Card />
							</div>
							<div class="col-12  col-md-6 col-lg-3">
								<Card />
							</div>
							<div class="col-12  col-md-6 col-lg-3">
								<Card />
							</div>							
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</div>

	);
};

export default Home;


