<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Explore & Experience Korea – A 15-Day Student Exchange Program</title>
	<style>
      :root {
          --primary: #c13b3a;
          --secondary: #1a3264;
          --accent: #f8c9c9;
          --light: #f5f5f5;
          --dark: #333333;
          --bg-color: #ffffff;
          --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

      body {
          font-family: var(--font-main);
          color: var(--dark);
          background-color: var(--bg-color);
          line-height: 1.6;
      }

      .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
      }

      /* Traditional Korean pattern border */
      .korean-border {
          border: 12px solid var(--light);
          border-image: url('/api/placeholder/200/20') 30 round;
          padding: 20px;
          margin: 20px 0;
          background-color: rgba(255, 255, 255, 0.9);
      }

      /* Header and Navigation */
      header {
          padding: 20px 0;
          background-color: var(--light);
          border-bottom: 3px solid var(--primary);
      }

      nav ul {
          display: flex;
          justify-content: center;
          list-style: none;
      }

      nav ul li {
          margin: 0 15px;
      }

      nav ul li a {
          text-decoration: none;
          color: var(--secondary);
          font-weight: 600;
          transition: all 0.3s ease;
      }

      nav ul li a:hover {
          color: var(--primary);
      }

      /* Hero Section */
      .hero {
          background: linear-gradient(rgba(231,221,203), rgba(231,221,203)), url('/api/placeholder/1200/600') no-repeat center center/cover;
          color: white;
          padding: 100px 0;
          text-align: center;
          color: var(--dark)
      }

      .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          font-weight: 700;
          color: var(--dark)
      }

      .hero p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
      }

      .hero .video-container {
          width: 80%;
          max-width: 800px;
          margin: 30px auto;
          background: linear-gradient(135deg, #540c20 0%, #540c20ba 50%, #e9c10e 100%);
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      }

      .hero .video-container img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
          border-radius: 10px;
      }

      .btn-primary {
          display: inline-block;
          padding: 12px 30px;
          background-color: var(--primary);
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
      }

      .btn-primary:hover {
          background-color: #a62e2d;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      /* Why Korea Section */
      .why-korea {
          padding: 80px 0;
          background-color: var(--light);
      }

      .section-title {
          text-align: center;
          margin-bottom: 50px;
          color: var(--secondary);
          position: relative;
      }

      .section-title:after {
          content: "";
          display: block;
          width: 100px;
          height: 3px;
          background-color: var(--primary);
          margin: 15px auto;
      }

      .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
      }

      .feature-item {
          padding: 20px;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
      }

      .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      }

      .feature-item h3 {
          color: var(--secondary);
          margin-bottom: 15px;
          display: flex;
          align-items: center;
      }

      .feature-item h3 span {
          color: var(--primary);
          margin-right: 10px;
      }

      /* About Program Section */
      .about-program {
          padding: 80px 0;
          background: url('/api/placeholder/1200/400') no-repeat center center/cover;
          position: relative;
      }

      .about-program::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.9);
      }

      .about-program .container {
          position: relative;
          z-index: 1;
      }

      .program-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
      }

      .program-card {
          background-color: white;
          border-radius: 8px;
          padding: 25px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      }

      .program-card h3 {
          color: var(--secondary);
          margin-bottom: 15px;
          border-bottom: 2px solid var(--accent);
          padding-bottom: 10px;
      }

      .program-card ul {
          list-style-type: none;
          padding-left: 10px;
      }

      .program-card ul li {
          margin-bottom: 10px;
          position: relative;
          padding-left: 20px;
      }

      .program-card ul li:before {
          content: "•";
          color: var(--primary);
          font-weight: bold;
          position: absolute;
          left: 0;
      }

      /* Travel & Logistics */
      .travel-logistics {
          padding: 80px 0;
          background-color: var(--light);
      }

      .logistics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 25px;
      }

      .logistics-item {
          text-align: center;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      }

      .logistics-item i {
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 15px;
          display: block;
      }

      /* Itinerary Section */
      .itinerary {
          padding: 80px 0;
      }

      .timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
      }

      .timeline::after {
          content: '';
          position: absolute;
          width: 6px;
          background-color: var(--secondary);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
      }

      .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
          box-sizing: border-box;
      }

      .timeline-item::after {
          content: '';
          position: absolute;
          width: 25px;
          height: 25px;
          background-color: white;
          border: 4px solid var(--primary);
          border-radius: 50%;
          top: 15px;
          z-index: 1;
      }

      .left {
          left: 0;
      }

      .right {
          left: 50%;
      }

      .left::after {
          right: -13px;
      }

      .right::after {
          left: -13px;
      }

      .timeline-content {
          padding: 20px 30px;
          background-color: white;
          position: relative;
          border-radius: 6px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      }

      .timeline-content h3 {
          color: var(--secondary);
          margin-bottom: 15px;
      }

      /* Korean Experience Section */
      .korean-experience {
          padding: 80px 0;
          background-color: var(--light);
      }

      .experience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
      }

      .experience-card {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
      }

      .experience-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      }

      .card-image {
          height: 200px;
          background-size: cover;
          background-position: center;
      }

      .card-content {
          padding: 20px;
          background-color: white;
      }

      .card-content h3 {
          color: var(--secondary);
          margin-bottom: 15px;
      }

      /* Policies Section */
      .policies {
          padding: 80px 0;
      }

      .policy-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
      }

      .policy-card {
          padding: 25px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      }

      /* Safety Section */
      .safety {
          padding: 80px 0;
          background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/api/placeholder/1200/400') no-repeat center center/cover;
      }

      .safety-points {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
      }

      .safety-point {
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: flex-start;
      }

      .safety-point span {
          color: #4CAF50;
          margin-right: 15px;
          font-size: 1.5rem;
      }

      /* Testimonials */
      /* .testimonials {
				padding: 80px 0;
				background-color: var(--light);
			}

			.testimonial-container {
				display: flex;
				overflow-x: auto;
				scroll-snap-type: x mandatory;
				scrollbar-width: none;
			}

			.testimonial-container::-webkit-scrollbar {
				display: none;
			}

			.testimonial {
				min-width: 300px;
				scroll-snap-align: start;
				padding: 30px;
				margin-right: 20px;
				background-color: white;
				border-radius: 8px;
				box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
			}

			.testimonial-content {
				font-style: italic;
				margin-bottom: 20px;
			}

			.testimonial-author {
				font-weight: 600;
				display: block;
				color: var(--secondary);
			} */

      /* Contact Section */
      .contact {
          padding: 80px 0;
          background-color: var(--secondary);
          color: white;
      }

      .contact-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
      }

      .contact-info h3 {
          margin-bottom: 20px;
          color: white;
      }

      .contact-info p {
          margin-bottom: 10px;
      }

      .contact-form label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
      }

      .contact-form input,
      .contact-form textarea,
      .contact-form select {
          width: 100%;
          padding: 12px;
          margin-bottom: 20px;
          border: none;
          border-radius: 4px;
      }

      .contact-form textarea {
          height: 120px;
      }

      /* Footer */
      footer {
          background-color: var(--dark);
          color: white;
          padding: 30px 0;
          text-align: center;
      }

      .social-icons {
          margin-top: 20px;
      }

      .social-icons a {
          color: white;
          margin: 0 10px;
          font-size: 1.5rem;
      }

      /* Responsive */
      @media (max-width: 768px) {
          .timeline::after {
              left: 31px;
          }

          .timeline-item {
              width: 100%;
              padding-left: 70px;
              padding-right: 25px;
          }

          .timeline-item::after {
              left: 18px;
          }

          .left::after, .right::after {
              left: 18px;
          }

          .right {
              left: 0;
          }

          nav ul {
              flex-direction: column;
              align-items: center;
          }

          nav ul li {
              margin: 10px 0;
          }
      }
	</style>
</head>
<body>
<!-- Header and Navigation -->
<header>
	<div class="container">
		<nav>
			<ul>
				<li><a href="#why-korea">Why Korea?</a></li>
				<li><a href="#about-program">Program</a></li>
				<li><a href="#travel">Travel</a></li>
				<li><a href="#itinerary">Itinerary</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>

<!-- Hero Section -->
<section class="hero" id="home">
	<div class="container">
		<h1>Study, Explore & Experience Korea</h1>
		<p>A 15-Day Student Exchange Program!</p>
		<p>Immerse in Korea's culture, technology & innovation while earning a global learning experience!</p>
		<div class="video-container">
			<img src="https://eng.skuniv.ac.kr/share/img/page/gallery/Campus/Campus_Outside_View_1.jpg" alt="LIW X KOREA" />
		</div>
		<a href="#contact" class="btn-primary">Apply Now</a>
	</div>
</section>

<!-- Why Korea Section -->
<section class="why-korea" id="why-korea">
	<div class="container">
		<h2 class="section-title">Why Korea?</h2>
		<div class="features">
			<div class="feature-item">
				<h3><span>✅</span> World's Most Innovative Country</h3>
				<p>Experience the tech hubs, AI innovations, and robotics that make Korea a global leader in technology.</p>
			</div>
			<div class="feature-item">
				<h3><span>✅</span> Safety & Peace Index</h3>
				<p>Ranked among the safest countries for students, ensuring peace of mind for both parents and learners.</p>
			</div>
			<div class="feature-item">
				<h3><span>✅</span> Global Cultural Hub</h3>
				<p>Immerse yourself in K-pop, K-dramas, arts, and rich traditions that have captivated the world.</p>
			</div>
			<div class="feature-item">
				<h3><span>✅</span> Culinary Paradise</h3>
				<p>Discover authentic Korean food experiences, from street food to traditional royal cuisine.</p>
			</div>
			<div class="feature-item">
				<h3><span>✅</span> Nature & Sustainability</h3>
				<p>Visit eco-friendly cities and breathtaking landscapes that showcase Korea's commitment to sustainability.</p>
			</div>
			<div class="feature-item">
				<h3><span>✅</span> Warm & Welcoming People</h3>
				<p>Experience the student-friendly culture and the warmth of Korean hospitality.</p>
			</div>
		</div>
	</div>
</section>

<!-- About Program Section -->
<section class="about-program" id="about-program">
	<div class="container">
		<h2 class="section-title">About the Program</h2>
		<div class="program-details">
			<div class="program-card">
				<h3>What is this exchange program?</h3>
				<p>This comprehensive 15-day student exchange program offers a unique blend of educational visits, cultural immersion, and technological exploration in South Korea. Students will gain global exposure, cultural understanding, and innovative thinking skills.</p>
			</div>
			<div class="program-card">
				<h3>Who can apply?</h3>
				<ul>
					<li>Students aged 18-25</li>
					<li>High schools and universities</li>
					<li>Educational institutions seeking global exposure</li>
					<li>Individuals with interest in Korean culture and innovation</li>
				</ul>
			</div>
			<div class="program-card">
				<h3>Program Benefits</h3>
				<ul>
					<li>Cross-cultural learning experiences</li>
					<li><b>Globally recognized certification</b></li>
					<li>Global networking opportunities</li>
					<li>Personal and academic growth</li>
					<li>Exposure to cutting-edge technology</li>
				</ul>
			</div>
			<div class="program-card">
				<h3>Affiliations & Partnerships</h3>
				<ul>
					<li>Korean Government Education Department</li>
					<li>75 year old leading Korean university (IEQAS) accredited</li>
					<li>Korea Tourism Board</li>
					<li>Global Technology Companies</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Travel & Logistics -->
<section class="travel-logistics" id="travel">
	<div class="container">
		<h2 class="section-title">Travel & Logistics</h2>
		<div class="logistics-grid">
			<div class="logistics-item">
				<i>🗓️</i>
				<h3>Dates of Travel</h3>
				<p>Session 1: July 6 - July 26, 2025</p>
				<p>Session 2: August 2 - August 23, 2025</p>
			</div>
			<div class="logistics-item">
				<i>⏳</i>
				<h3>Travel Time</h3>
				<p>Bangalore to Seoul: Approximately 8 hours (direct flight)</p>
			</div>
			<div class="logistics-item">
				<i>🏨</i>
				<h3>Accommodation</h3>
				<p>Super clean student dorms</p>
			</div>
			<div class="logistics-item">
				<i>💰</i>
				<h3>Currency</h3>
				<p>Korean Won (KRW)</p>
				<p>1 USD ≈ 1,200 KRW</p>
			</div>
			<div class="logistics-item">
				<i>📍</i>
				<h3>Visa Requirements</h3>
				<p>Short-term visit visa</p>
				<p>Valid passport (6 months)</p>
			</div>
		</div>
	</div>
</section>

<!-- Itinerary Section -->
<section class="itinerary" id="itinerary">
	<div class="container">
		<h2 class="section-title">Full 15-Day Itinerary</h2>
		<div class="timeline">
			<div class="timeline-item left">
				<div class="timeline-content">
					<h3>Day 1-3: Seoul Arrival & Intorduction</h3>
					<p>Arrival, orientation, university tour, university visit, and cultural workshops.</p>
				</div>
			</div>
			<div class="timeline-item right">
				<div class="timeline-content">
					<h3>Day 4-6: Technology & Culture</h3>
					<p>Visits to Modern Art Museum, robotics, Hanbok Experience and More...</p>
				</div>
			</div>
			<div class="timeline-item left">
				<div class="timeline-content">
					<h3>Day 7-9: K-Beauty And K-Pop</h3>
					<p>All about Korean obsession over beauty, haircare, dance, music, drama and more...</p>
				</div>
			</div>
			<div class="timeline-item right">
				<div class="timeline-content">
					<h3>Day 10-12: Lotte World and City tour</h3>
					<p>A fun filled memorable time with your friends</p>
				</div>
			</div>
			<div class="timeline-item left">
				<div class="timeline-content">
					<h3>Day 13-15: SKU Finale and Farewell Ceremony</h3>
					<!-- <p>Return to Seoul, capstone project, farewell dinner, and cultural performance.</p> -->
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Korean Experience Section -->
<!-- <section class="korean-experience" id="experience">
	<div class="container">
		<h2 class="section-title">The Korean Experience: What You'll Explore</h2>
		<div class="experience-grid">
			<div class="experience-card">
				<div class="card-image" style="background-image: url('/api/placeholder/400/200')"></div>
				<div class="card-content">
					<h3>Cities & Adventure</h3>
					<ul>
						<li>Seoul - Korea's vibrant capital</li>
						<li>Busan - Coastal metropolis</li>
						<li>Incheon - Innovation city</li>
						<li>Jeju Island - Natural paradise</li>
					</ul>
				</div>
			</div>
			<div class="experience-card">
				<div class="card-image" style="background-image: url('/api/placeholder/400/200')"></div>
				<div class="card-content">
					<h3>Culture & Entertainment</h3>
					<ul>
						<li>Traditional performances</li>
						<li>Cultural workshops</li>
						<li>K-Pop experience</li>
						<li>Entertainment industry exposure</li>
					</ul>
				</div>
			</div>
			<div class="experience-card">
				<div class="card-image" style="background-image: url('/api/placeholder/400/200')"></div>
				<div class="card-content">
					<h3>Technology & Innovation</h3>
					<ul>
						<li>Visits to Samsung, Hyundai, LG</li>
						<li>AI & Robotics workshops</li>
						<li>Smart city infrastructure</li>
						<li>Innovation hubs & startups</li>
					</ul>
				</div>
			</div>
			<div class="experience-card">
				<div class="card-image" style="background-image: url('/api/placeholder/400/200')"></div>
				<div class="card-content">
					<h3>Culinary Delights</h3>
					<ul>
						<li>Traditional Korean cuisine</li>
						<li>Cooking workshops</li>
						<li>Street food exploration</li>
						<li>Farm-to-table experiences</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section> -->

<!-- Policies Section -->
<section class="policies">
	<div class="container">
		<h2 class="section-title">Policies & Guidelines</h2>
		<div class="policy-container">
			<div class="policy-card">
				<h3>Essential Documents</h3>
				<ul>
					<li>Valid passport (6 months validity)</li>
					<li>Korean Short-term visit visa</li>
					<li>Travel insurance from you home Country</li>
					<!-- <li>Health certificates if any</li> -->
					<!-- <li>Parental consent form (for minors)</li> -->
				</ul>
			</div>
			<div class="policy-card">
				<h3>Do's in Korea</h3>
				<ul>
					<li>Bow slightly when greeting people</li>
					<li>Remove shoes before entering homes</li>
					<li>Use both hands when giving/receiving items</li>
					<li>Respect elders and professors</li>
					<li>Be punctual for all activities</li>
				</ul>
			</div>
			<div class="policy-card">
				<h3>Don'ts in Korea</h3>
				<ul>
					<li>Don't write names in red ink</li>
					<li>Avoid public displays of affection</li>
					<li>Don't start eating before elders</li>
					<li>Avoid loud talking in public transport</li>
					<li>Don't point with a single finger</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Safety Section -->
<section class="safety">
	<div class="container">
		<h2 class="section-title">Safety & Peace Index</h2>
		<div class="safety-points">
			<div class="safety-point">
				<span>✅</span>
				<div>
					<h3>Top Safety Ranking</h3>
					<p>Korea is ranked as one of the safest destinations for international students with exceptionally low crime rates.</p>
				</div>
			</div>
			<div class="safety-point">
				<span>✅</span>
				<div>
					<h3>Security Systems</h3>
					<p>Highly efficient security systems throughout cities with CCTV coverage and police presence in tourist areas.</p>
				</div>
			</div>
			<div class="safety-point">
				<span>✅</span>
				<div>
					<h3>Healthcare Facilities</h3>
					<p>Top-notch healthcare facilities with English-speaking staff available for emergencies and medical needs.</p>
				</div>
			</div>
			<div class="safety-point">
				<span>✅</span>
				<div>
					<h3>Student-Friendly</h3>
					<p>Efficient public transportation, clear signage in English, and student support services throughout the journey.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials
<section class="testimonials">
	<div class="container">
		<h2 class="section-title">Testimonials & Past Experiences</h2>
		<div class="testimonial-container">
			<div class="testimonial">
				<div class="testimonial-content">
					"This program changed my perspective on global education. The blend of cultural experiences and technological exploration was perfect!"
				</div>
				<span class="testimonial-author">- Priya S., Student, 2024 Program</span>
			</div>
			<div class="testimonial">
				<div class="testimonial-content">
					"As a parent, I was hesitant about sending my child abroad, but the program's organization and safety measures were exceptional."
				</div>
				<span class="testimonial-author">- Rajesh M., Parent, 2024 Program</span>
			</div>
			<div class="testimonial">
				<div class="testimonial-content">
					"The exposure to Korean innovation and technology gave our students a competitive edge in their academic pursuits."
				</div>
				<span class="testimonial-author">- Dr. Anita K., School Principal</span>
			</div>
		</div>
	</div>
</section> -->

<!-- Contact Section -->
<section class="contact" id="contact">
	<div class="container">
		<h2 class="section-title">Contact & Inquiry</h2>
		<div class="contact-container">
			<div class="contact-info">
				<h3>Get in Touch</h3>
				<p>Email: info@leadershipinnovationworld.com</p>
				<p>Phone: +91 81234 23009</p>
				<p>Address: JP Nagar, Bangalore, India</p>
				<p>Office Hours: Monday-Friday, 9 AM - 5 PM</p>
			</div>
		</div>
	</div>
</section>
</body>
</html>