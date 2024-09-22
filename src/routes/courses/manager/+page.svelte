<!-- src/routes/courses/managers/+page.svelte -->
<script>
	import CourseRegistrationForm from '$lib/components/sections/courses/CourseRegistrationForm.svelte';
	import { fade } from 'svelte/transition';

  import * as Dialog from '$lib/components/ui/dialog';


let dialogOpen = false;
let selectedCourse = null;


	export let form;

	const NewCourseCategories = [
		{
			name: 'Leadership and Management',
			courses: [
				{
					name: 'Coaching and Mentoring',
					overview:
						'Unlock the potential of your team with our Coaching and Mentoring course. Learn how to build strong relationships and set strategic goals to motivate employees toward higher performance.',
					fomoQuestion:
						'Struggling to get your team to meet their goals? This course is your roadmap to effective coaching!'
				},
				{
					name: 'Conducting Annual Employee Reviews',
					overview:
						'Enhance employee satisfaction and engagement with our Conducting Annual Employee Reviews course. Discover how to design effective reviews that provide constructive feedback and drive overall performance.',
					fomoQuestion:
						'Are your annual reviews failing to motivate your employees? Transform them with this essential course!'
				},
				{
					name: 'Crisis Management',
					overview:
						"Prepare your organization for the unexpected with our Crisis Management course. Learn to identify risks, assess situations, and implement effective responses to ensure your company's survival and profitability.",
					fomoQuestion:
						"Is your team ready for a crisis? Don't wait until it's too late—this course will equip you with the skills to manage any situation!"
				},
				{
					name: 'Developing New Managers',
					overview:
						'Equip your future leaders with essential management skills through our Developing New Managers course. Identify and nurture prospective managers, creating a supportive environment that fosters confidence and success.',
					fomoQuestion:
						'Are your new managers struggling to meet expectations? This course is the key to developing effective leaders from the start!'
				},
				{
					name: 'Developing Emotional Intelligence',
					overview:
						'Transform your personal and professional interactions with our Developing Emotional Intelligence course. Learn to recognize and manage your emotions, fostering self-awareness and authentic communication for better relationships.',
					fomoQuestion:
						'Feeling overwhelmed by workplace dynamics? Enhance your emotional intelligence and create a more positive work environment with this course!'
				},
				{
					name: 'Employee Motivation',
					overview:
						'Unlock the keys to a motivated workforce with our Employee Motivation course. Learn effective tools for goal setting and influencing, while exploring popular motivational models to create a tailored motivation program.',
					fomoQuestion:
						'Is your team lacking motivation? Discover the secrets to inspiring them with this transformative course!'
				},
				{
					name: 'Knowledge Management',
					overview:
						"Maximize your organization's intellectual resources with our Knowledge Management course. Learn how to effectively organize and utilize the knowledge within your team, regardless of company size or budget.",
					fomoQuestion:
						'Are you struggling to harness the collective knowledge of your team? This course will empower you to manage knowledge effectively!'
				},
				{
					name: 'Leadership and Influence',
					overview:
						'Develop your innate leadership abilities with our Leadership and Influence course. Gain the confidence and skills needed to lead effectively, turning challenges into opportunities for growth.',
					fomoQuestion:
						'Ready to step into a leadership role but unsure how? This course will guide you on your journey to becoming an influential leader!'
				},
				{
					name: 'Manager Management',
					overview:
						'Empower your leadership team with our Manager Management course. Gain essential skills to guide and motivate managers, fostering an environment of growth and exceptional performance.',
					fomoQuestion:
						'Are your managers struggling to lead effectively? Equip them with the skills they need to excel with this comprehensive course!'
				},
				{
					name: 'Performance Management',
					overview:
						"Align your organization's priorities with our Performance Management course. Learn how to enhance employee-manager relationships, set clear goals, and ensure smooth transitions during changes, ultimately boosting productivity.",
					fomoQuestion:
						"Is your team's performance lacking direction? This course will help bridge the gap and elevate your organization's effectiveness!"
				},
				{
					name: 'Project Management',
					overview:
						'Master the art of project management with our Project Management course. Gain essential skills in planning, organizing, and managing resources to deliver projects successfully, following the globally recognized PMBOK standards.',
					fomoQuestion:
						'Are your projects often over budget or behind schedule? Enhance your project delivery skills and achieve success with our comprehensive course!'
				},
				{
					name: 'Self-Leadership',
					overview:
						'Unlock your potential with our Self-Leadership course. Learn to motivate and guide yourself effectively, paving the way for success in both your personal and professional life.',
					fomoQuestion:
						'Are you struggling to lead yourself effectively? Discover the keys to self-motivation and become a more impactful leader!'
				},
				{
					name: 'Servant Leadership',
					overview:
						'Embrace the philosophy of servant leadership with our dedicated course. Focus on empowering your team, building strong relationships, and ensuring both employee and organizational success.',
					fomoQuestion:
						'Do your leadership efforts often fall flat? Transform your approach and cultivate a thriving team with servant leadership!'
				}
			]
		},
		{
			name: 'Personal Development',
			courses: [
				{
					name: 'Attention Management',
					overview:
						'Boost productivity and reduce mistakes with our Attention Management course. Learn strategies to enhance focus, enabling you to connect emotionally with your team and meet both personal and organizational goals.',
					fomoQuestion:
						'Are distractions holding you back from peak performance? Master the art of attention management and transform your effectiveness!'
				},
				{
					name: 'Being a Likeable Boss',
					overview:
						'Cultivate stronger relationships with your team through our Being a Likeable Boss course. Discover how honesty, trust, and effective delegation can enhance your leadership style and create a more positive work environment.',
					fomoQuestion:
						"Are you struggling to connect with your team? Become the boss everyone admires and trusts—don't miss out on this essential course!"
				},
				{
					name: 'Critical Thinking',
					overview:
						'Enhance your decision-making abilities with our Critical Thinking course. Develop skills to analyze, evaluate, and distinguish relevant information, leading to more rational decisions and improved performance.',
					fomoQuestion:
						'Do you find it challenging to make sound decisions? Sharpen your critical thinking skills and elevate your professional effectiveness!'
				},
				{
					name: 'Emotional Intelligence',
					overview:
						'Enhance your self-awareness and self-management with our Emotional Intelligence course. Understand how emotions influence motivation and behavior, leading to improved interactions in both your personal and professional life.',
					fomoQuestion:
						'Are you ready to unlock your emotional potential? Develop emotional intelligence and transform your relationships!'
				},
				{
					name: 'Goal Setting and Getting Things Done',
					overview:
						'Master the art of achieving your objectives with our Goal Setting and Getting Things Done course. Learn essential skills in time management, overcoming distractions, and handling setbacks to boost your productivity and satisfaction.',
					fomoQuestion:
						'Struggling to meet your goals? Discover proven strategies to get things done and elevate your success!'
				},
				{
					name: 'Improving Mindfulness',
					overview:
						'Transform your awareness with our Improving Mindfulness course. Learn to be present and recognize your actions, enhancing your ability to connect with your environment and improve self-regulation.',
					fomoQuestion:
						'Do you often feel overwhelmed or distracted? Embrace mindfulness and experience life with a renewed perspective!'
				},
				{
					name: 'Improving Self-Awareness',
					overview:
						'Enhance your understanding of your emotions and feelings with our Improving Self-Awareness course. This course focuses on recognizing your physical, emotional, and psychological self, leading to better self-control and improved relationships.',
					fomoQuestion:
						'Feeling overwhelmed by your emotions? Boost your self-awareness and transform your life and work environment!'
				},
				{
					name: 'Managing Workplace Anxiety',
					overview:
						'Equip yourself with the skills to recognize and manage workplace anxiety with our Managing Workplace Anxiety course. Learn to identify symptoms and develop coping strategies to navigate the stressors of the work environment effectively.',
					fomoQuestion:
						'Struggling with anxiety at work? Discover essential tools to manage stress and thrive in your career!'
				},
				{
					name: 'Personal Productivity',
					overview:
						'Unlock your potential with our Personal Productivity course. Learn to organize your life, establish effective routines, and utilize planning tools to maximize your efficiency and time management.',
					fomoQuestion:
						"Feeling like there aren't enough hours in the day? Take control of your productivity and transform your daily routine!"
				},
				{
					name: 'Public Speaking',
					overview:
						'Conquer your fear of public speaking with our Online Public Speaking course. Gain confidence and learn essential skills to engage your audience and deliver impactful presentations.',
					fomoQuestion:
						'Is the thought of speaking in front of a crowd paralyzing you? Overcome your fears and elevate your career with powerful public speaking skills!'
				},
				{
					name: 'Social Learning',
					overview:
						'Discover the power of collaborative learning with our Social Learning course. Learn how to leverage social interactions to enhance knowledge retention and foster a culture of continuous learning within your organization.',
					fomoQuestion:
						'Is your team missing out on valuable learning opportunities? Unlock the potential of social learning and watch your organization thrive!'
				},
				{
					name: 'Stress Management',
					overview:
						'Master the art of managing stress with our Stress Management course. Learn to differentiate between positive and negative stress and apply the Triple A approach to tackle any challenging situation. Equip yourself with relaxation techniques, routines, and a stress log system to create a healthier lifestyle.',
					fomoQuestion:
						"Feeling overwhelmed by stress? Discover how to transform pressure into productivity—don't miss out on mastering stress management!"
				},
				{
					name: 'Work-Life Balance',
					overview:
						'Achieve harmony in your life with our Work-Life Balance course. Learn effective time management strategies to juggle career demands and home life, leading to improved health and productivity in both areas.',
					fomoQuestion:
						'Struggling to balance work and home? Discover how to work less and achieve more—join us to find your perfect equilibrium!'
				}
			]
		},
		{
			name: 'Marketing and Sales',
			courses: [
				{
					name: 'In Person Sales',
					overview:
						'In an era dominated by online shopping, the art of in-person sales remains invaluable. Our In-Person Sales course equips you with the skills to connect personally with customers and create lasting impressions. Learn effective strategies to guide potential clients through the sales process with confidence and charisma.',
					fomoQuestion:
						"Are you ready to stand out in a digital world? Don't miss your chance to master the art of in-person sales—sign up today and elevate your sales game!"
				},
				{
					name: 'Motivating Your Sales Team',
					overview:
						"Inspire your sales team to achieve their best with our Motivating Your Sales Team course. Discover how to identify what drives each team member and create an environment that fosters motivation through effective communication and tailored incentives. Boost your team's performance and productivity by cultivating a culture of motivation and healthy competition.",
					fomoQuestion:
						"Is your sales team reaching its full potential? Don't wait to transform your team's performance—enroll now and discover the secrets to motivating your salesforce for success!"
				},
				{
					name: 'Presentation Skills',
					overview:
						'Conquer the fear of public speaking with our Presentation Skills Online Course. Equip yourself with essential skills to deliver compelling presentations, engage your audience, and make your message memorable. Learn how to create impactful content and utilize visual aids effectively.',
					fomoQuestion:
						"Want to shine in your next presentation? Don't miss out on the chance to enhance your speaking skills—enroll in our Presentation Skills Online Course today and make every presentation count!"
				},
				{
					name: 'Prospecting and Lead Generation',
					overview:
						'Master the art of finding and nurturing potential customers with our Prospecting and Lead Generation course. Learn effective techniques to identify promising leads, engage with them meaningfully, and convert them into loyal customers. Discover how to use various tools and strategies to build a robust sales pipeline.',
					fomoQuestion:
						"Is your sales pipeline running dry? Don't miss out on potential customers—join our Prospecting and Lead Generation course and learn how to keep your business growing!"
				},
				{
					name: 'Sales Fundamentals',
					overview:
						'Build a strong foundation in sales with our Sales Fundamentals course. Learn essential techniques for prospecting, qualifying leads, and closing deals. Discover how to build rapport with customers, overcome objections, and create long-lasting relationships that drive repeat business.',
					fomoQuestion:
						"Want to kickstart your sales career or refresh your skills? Don't let opportunities pass you by—enroll in our Sales Fundamentals course and become a sales powerhouse!"
				},
				{
					name: 'Top 10 Sales Secrets',
					overview:
						'Discover the secrets to successful selling with our Top 10 Sales Secrets course. Learn key traits and strategies that can turn anyone into a successful salesperson. Build strong customer relationships and develop effective communication skills that lead to lasting success in sales.',
					fomoQuestion:
						"Think sales is an art you can't master? Think again! Join our Top 10 Sales Secrets course and unlock your potential as a sales superstar!"
				}
			]
		},
		{
			name: 'Human Resources',
			courses: [
				{
					name: 'Health and Wellness at Work',
					overview:
						'Promote a healthier workplace with our Health and Wellness at Work course. Learn strategies to create a work environment that supports physical and mental well-being, leading to increased productivity and job satisfaction.',
					fomoQuestion:
						'Is your workplace supporting the health and wellness of your employees? Discover how to create a thriving, healthy work environment with this essential course!'
				},
				{
					name: 'Hiring Strategies',
					overview:
						"The backbone of successful companies lies in their talent. Our Hiring Strategies course equips you with the knowledge and tools to identify and recruit the best candidates. By focusing on the right combination of skills, attitude, and cultural fit, you'll streamline your hiring process, saving both time and money. Prepare your hiring team to spot those diamonds in the rough and elevate your organization's talent pool.",
					fomoQuestion:
						"Are you ready to transform your hiring process? Don't let top talent slip away! Join our Hiring Strategies course and discover how to find the perfect fit for your organization today!"
				},
				{
					name: 'Millennial Onboarding',
					overview:
						"Onboarding is crucial for turning new hires into productive team members. Our Millennial Onboarding course focuses on adapting the onboarding process to meet the needs of the tech-savvy Millennial workforce. By refining your approach, you'll foster a more skilled, engaged, and happy workforce, ultimately enhancing your company's market position.",
					fomoQuestion:
						'Are you ready to revolutionize your onboarding process for Millennials? Join our Millennial Onboarding course and ensure your new hires hit the ground running!'
				},
				{
					name: 'Talent Management',
					overview:
						'Talent is your most valuable asset, and effective management is key to maximizing its potential. Our Talent Management course guides you in developing a skilled workforce while attracting top talent. Learn how to reduce training costs and retain the best employees, ensuring your organization thrives through better performance and productivity.',
					fomoQuestion:
						'Is your company ready to harness the full potential of its talent? Enroll in our Talent Management course and start investing in your workforce for lasting success!'
				},
				{
					name: 'Workplace Harassment',
					overview:
						"Workplace harassment is a serious issue that can arise in many forms, such as discrimination based on race, sex, or disability. It's crucial for employees and organizations to recognize and address harassment swiftly. Our Workplace Harassment workshop equips participants with the tools to identify harassment, understand their rights, and foster a safe, respectful workplace.",
					fomoQuestion:
						'Is your workplace truly safe for everyone? Join our Workplace Harassment workshop to learn how to protect your team and enforce a positive, inclusive work environment!'
				}
			]
		},
		{
			name: 'Organizational Essentials',
			courses: [
				{
					name: 'Appreciative Inquiry',
					overview:
						'Appreciative Inquiry is a powerful tool for organizational transformation. By shifting focus from problems to strengths, it fosters a positive work environment that encourages growth, collaboration, and innovation. This course helps you harness the power of positive questioning and storytelling to create a culture of continuous improvement, ultimately driving success within your organization.',
					fomoQuestion:
						'Ready to transform your organization by focusing on what works? Join our Appreciative Inquiry course and create a positive ripple effect across your team!'
				},
				{
					name: 'Customer Service',
					overview:
						'Every role involves serving customers, whether external clients or internal team members. The Customer Service course focuses on improving your interactions with all types of customers, equipping you with skills to handle challenging situations, foster loyalty, and generate repeat business. Learn effective communication techniques, both in-person and over the phone, to elevate your service standards.',
					fomoQuestion:
						'Is your customer service setting you apart from the competition? Join our Customer Service course and discover how to turn every interaction into a lasting relationship!'
				},
				{
					name: 'Developing Corporate Behavior',
					overview:
						"Corporate behavior is about more than just adhering to company policies; it's about fostering a culture of ethics, values, and respect. Our Developing Corporate Behavior course helps you align your organization's actions with these principles, creating a positive environment where trust and communication thrive. Participants will experience improved teamwork, reduced incidents, and a boost in loyalty and overall morale.",
					fomoQuestion:
						'Is your company culture strong enough to drive success? Join our Developing Corporate Behavior course and create a positive environment that sets you apart as a leader!'
				},
				{
					name: 'Networking Within the Company',
					overview:
						"Strong internal networking is the key to creating an engaging and high-performing workplace. Our Networking Within the Company course equips you with the communication and relationship-building skills necessary to foster collaboration, break down silos, and boost productivity. By improving connections between colleagues, you'll help your organization thrive in a more connected and cooperative environment.",
					fomoQuestion:
						'Is your team truly connected? Learn how to build lasting relationships and improve workplace performance with our Networking Within the Company course!'
				},
				{
					name: 'Teamwork and Team Building',
					overview:
						'Teamwork is essential in every aspect of life, and a strong team can lead to greater success in any organization. Our Teamwork and Team Building course encourages you to explore the dynamics of a successful team and how you can become a top-performing team member. Learn the core principles of collaboration, communication, and trust to foster a more cohesive and efficient team.',
					fomoQuestion:
						'Ready to build a dream team? Enroll in our Teamwork and Team Building course and discover the secrets to creating high-performing teams!'
				}
			]
		},
		{
			name: 'Administrative Skills',
			courses: [
				{
					name: 'Administrative Office Procedures',
					overview:
						"Administrative office procedures are the backbone of any successful organization. A well-structured office ensures efficiency, reduces miscommunication, and fosters a productive work environment. This course will teach you how to create and implement an Administrative Office Procedure binder, ensuring professionalism and smooth operations. With clear policies and procedures in place, your office can connect the company's vision to its daily activities seamlessly.",
					fomoQuestion:
						'Is your office running as smoothly as it could be? Learn the secrets to boosting efficiency with our Administrative Office Procedures course!'
				},
				{
					name: 'Administrative Support',
					overview:
						"Administrative assistants are indispensable to the smooth operation of any office. Whether you're new to the role or a seasoned professional, this course will equip you with tools to become even more efficient and valuable. Learn key skills in time management, resource efficiency, communication, and collaboration to help your office run like a well-oiled machine.",
					fomoQuestion:
						"Ready to become the admin superstar your office can't live without? Enroll in our Administrative Support course and elevate your skills today!"
				},
				{
					name: 'Archiving and Records Management',
					overview:
						'Proper records and archives management is essential to the success and compliance of any organization. This course will help you master the art of organizing, classifying, and maintaining records, boosting productivity and offering legal protection. By maintaining well-structured records, your business can improve efficiency and the bottom line.',
					fomoQuestion:
						"Is your record-keeping system holding your business back? Join our Archiving and Records Management course and streamline your organization's efficiency!"
				},
				{
					name: 'Creating a Great Webinar',
					overview:
						'Learn how to promote, host, and engage audiences in impactful webinars to market products, train teams, or conduct meetings globally.',
					fomoQuestion:
						'Is your audience tuning out during your webinars? This course will change that!'
				},
				{
					name: 'Employee Recognition',
					overview:
						'Discover cost-effective ways to boost productivity and loyalty through employee recognition programs that create a happier and safer workplace.',
					fomoQuestion: 'Struggling to keep employees motivated? This course has the answer!'
				},
				{
					name: 'Executive and Personal Assistants',
					overview:
						'Master essential skills like scheduling, minute-taking, and managing confidentiality to become a successful executive or personal assistant.',
					fomoQuestion:
						"Finding it hard to manage your boss's day-to-day efficiently? This course is your key to success!"
				},
				{
					name: 'Facilitation Skills',
					overview:
						'Learn how to lead meetings with fairness and efficiency, making decision-making smoother and creating a comfortable environment for all participants.',
					fomoQuestion:
						'Struggling to keep meetings on track? This course will turn you into a confident facilitator!'
				},
				{
					name: 'Meeting Management',
					overview:
						'Master planning and leading techniques to run engaging and productive meetings, reducing wasted time and leaving a lasting impression.',
					fomoQuestion: 'Do your meetings feel unproductive? This course can change that!'
				},
				{
					name: 'Organizational Skills',
					overview:
						'Improve your productivity and management by learning essential organizational skills that benefit both your personal and professional life.',
					fomoQuestion:
						'Tired of wasting time searching for things? Get organized with this course!'
				},
				{
					name: 'Supply Chain Management',
					overview:
						"Master the complexities of coordinating suppliers, producers, and customers to streamline operations and increase efficiency in today's global economy.",
					fomoQuestion:
						'Struggling to optimize your supply chain? This course can transform your process!'
				}
			]
		},
		{
			name: 'Professional Advancement',
			courses: [
				{
					name: 'Assertiveness and Self-Confidence',
					overview:
						'Develop assertiveness and self-confidence to express your worth and unlock new opportunities in both your personal and professional life.',
					fomoQuestion: 'Lacking confidence in crucial moments? This course will change that!'
				},
				{
					name: 'Body Language Basics',
					overview:
						'Learn to interpret and use non-verbal cues to enhance your communication, both in the workplace and at home.',
					fomoQuestion:
						'Missing out on key non-verbal signals? This course will teach you how to read them!'
				},
				{
					name: 'Communication Strategies',
					overview:
						'Master different communication methods to improve interactions and create positive impacts across your organization.',
					fomoQuestion:
						'Do you struggle to communicate effectively? This course can sharpen your skills!'
				},
				{
					name: 'Creative Problem Solving',
					overview:
						'Learn effective problem-solving techniques like brainstorming and data analysis to tackle any challenge with creativity and precision.',
					fomoQuestion:
						'Struggling to find solutions? This course will sharpen your problem-solving skills!'
				},
				{
					name: 'Developing Creativity',
					overview:
						'Rediscover your creative potential by learning how to remove barriers, improve imagination, and tap into divergent thinking.',
					fomoQuestion: 'Feeling stuck in routine? This course will unleash your creativity!'
				},
				{
					name: 'Digital Citizenship',
					overview:
						'Gain the skills to navigate and engage responsibly in the digital world, ensuring proper online communication and collaboration.',
					fomoQuestion: 'Unsure how to communicate effectively online? This course will guide you!'
				},
				{
					name: 'Interpersonal Skills',
					overview:
						'Master the art of making impactful introductions, improving communication, and building strong connections with others.',
					fomoQuestion:
						'Struggling to leave a lasting impression? This course will make you unforgettable!'
				},
				{
					name: 'mLearning Essentials',
					overview:
						'Learn how to deliver effective training through mobile devices, making education more flexible and accessible for your team.',
					fomoQuestion:
						'Is your organization missing out on mobile learning? This course will show you how to leverage it!'
				},
				{
					name: 'Negotiation Skills',
					overview:
						'Learn the phases and techniques of negotiation to confidently achieve fair deals while maintaining respect and balance in all interactions.',
					fomoQuestion:
						'Are you settling for less in negotiations? This course will empower you to get what you deserve!'
				},
				{
					name: 'Personal Branding',
					overview:
						'Define and showcase your unique strengths to influence how others perceive you, both personally and professionally.',
					fomoQuestion:
						'Is your personal brand helping or hurting you? This course will help you shape it!'
				},
				{
					name: 'Project Management',
					overview:
						'Master the art of planning, organizing, and managing resources to deliver successful projects, following PMBOK 7th Edition standards.',
					fomoQuestion:
						'Struggling to keep projects on track? This course is the key to project success!'
				},
				{
					name: 'Ten Soft Skills You Need',
					overview:
						'Identify and cultivate key soft skills that enhance communication, confidence, and overall career success.',
					fomoQuestion:
						'Are your soft skills holding you back? This course will elevate your interactions!'
				},
				{
					name: 'The Cloud and Business',
					overview:
						'Understand the fundamentals of cloud computing to make informed decisions that leverage its benefits while avoiding potential pitfalls.',
					fomoQuestion:
						'Are you missing out on the advantages of cloud technology? This course will keep you ahead!'
				}
			]
		},
		{
			name: 'Advanced Career Building',
			courses: [
				{
					name: 'Accountability in the Workplace',
					overview:
						'Learn strategies to foster a culture of accountability, enhancing teamwork and collaboration for improved performance and productivity.',
					fomoQuestion:
						'Is your team lacking accountability? This course will empower you to drive results!'
				},
				{
					name: 'Adult Learning – Physical Skills',
					overview:
						'Understand the psychomotor domain to enhance physical coordination and navigation in your environment for better learning outcomes.',
					fomoQuestion:
						'Struggling with physical skills in training? This course will help you master them!'
				},
				{
					name: 'Anger Management',
					overview:
						'Learn to identify your anger triggers and develop constructive coping strategies, turning anger into a valuable asset for personal growth.',
					fomoQuestion:
						'Is uncontrolled anger affecting your relationships or career? This course will help you manage it effectively!'
				},
				{
					name: 'Building Confidence and Assertiveness',
					overview:
						'Strengthen your self-confidence and assertiveness through effective communication and resilience, empowering you to navigate challenges and inspire others.',
					fomoQuestion:
						'Feeling unsure in difficult situations? This course will help you project confidence and take control!'
				},
				{
					name: 'Civility in the Workplace',
					overview:
						"Learn the importance of civility and how to cultivate respectful behavior in the workplace, addressing incivility's causes and effects for a healthier work environment.",
					fomoQuestion:
						"Is rudeness impacting your team's performance? This course will help you create a more civil workplace!"
				},
				{
					name: 'Creativity: Thinking Outside the Box',
					overview:
						'Learn to foster a creative workplace that encourages innovative thinking, leading to growth, engagement, and increased productivity.',
					fomoQuestion:
						'Is your team stuck in routine? This course will unlock their creative potential!'
				},
				{
					name: 'Developing a Lunch and Learn',
					overview:
						'Learn how to effectively host Lunch and Learn sessions to introduce new topics or products, overcoming attendance challenges for engaging training.',
					fomoQuestion:
						'Looking for cost-effective training solutions? This course will elevate your Lunch and Learn sessions!'
				},
				{
					name: 'Developing Emotional Intelligence',
					overview:
						'Master the art of recognizing and managing emotions to foster self-awareness and build positive relationships, enhancing your personal and professional life.',
					fomoQuestion:
						'Want to improve your emotional skills? This course will empower you to navigate challenges with confidence!'
				},
				{
					name: 'Diversity and Inclusion',
					overview:
						'Understand and manage diversity in the workplace, learning to implement inclusive policies that drive success and create a better organizational culture.',
					fomoQuestion:
						'Is your organization lacking in diversity awareness? This course will help you embrace inclusivity!'
				},
				{
					name: 'Emotional Intelligence at Work',
					overview:
						'Discover techniques to enhance your emotional intelligence, improving communication and relationships while developing conflict resolution skills.',
					fomoQuestion:
						'Are you struggling with workplace interactions? This course will help you become a more effective communicator!'
				},
				{
					name: 'Event Planning',
					overview:
						'Gain essential tools and techniques to effectively plan and execute memorable events, ensuring a positive experience for every attendee.',
					fomoQuestion:
						'Planning an event soon? This course will give you the confidence to make it a standout success!'
				},
				{
					name: 'Increasing Your Happiness',
					overview:
						'Learn the power of positive thinking to boost your happiness, creating a ripple effect that enhances communication and productivity in your organization.',
					fomoQuestion:
						'Feeling stuck in negativity? This course will transform your outlook and improve your overall well-being!'
				},
				{
					name: 'Leadership Development for Women',
					overview:
						'Empower yourself with tools and insights to overcome challenges in leadership. This course focuses on building confidence, networking, and mentoring to inspire future generations of female leaders.',
					fomoQuestion:
						"Want to break barriers and shatter glass ceilings? Join this course to become the leader you're meant to be!"
				},
				{
					name: 'Life Coaching Essentials',
					overview:
						'Discover the transformative power of life coaching! This course clarifies the role of a life coach in enhancing your personal and professional life, helping you set and achieve meaningful goals.',
					fomoQuestion:
						'Ready to unlock your potential and achieve your dreams? This course is your first step!'
				},
				{
					name: 'Managing Personal Finances',
					overview:
						'Take control of your financial future with practical tools and strategies! This course guides you through budgeting and planning to reclaim your financial freedom.',
					fomoQuestion:
						'Want to stop feeling anxious about your finances? Join this course to learn how to master your money!'
				},
				{
					name: 'Managing Workplace Harassment',
					overview:
						'Foster a safe and respectful workplace by understanding the signs and implications of harassment. This course provides essential knowledge and strategies for reporting and managing such issues effectively.',
					fomoQuestion:
						'Concerned about creating a positive work environment? This course will equip you with the skills to make a difference!'
				},
				{
					name: 'Middle Manager',
					overview:
						'Middle managers are vital to organizational success, bridging the gap between upper management and staff. This course emphasizes the importance of training for these managers, equipping them with the skills to align departmental goals with company objectives effectively.',
					fomoQuestion:
						'Want to ensure your organization runs smoothly? Invest in your middle managers today!'
				},
				{
					name: 'Office Health and Safety',
					overview:
						'Promote a healthier workplace with our Office Health and Safety course. Gain essential knowledge about illness prevention, symptom recognition, and emergency response to keep your team thriving.',
					fomoQuestion:
						'Concerned about workplace health? This course will equip you with the skills to create a safer environment!'
				},
				{
					name: 'Office Politics for Managers',
					overview:
						'Navigate the complex landscape of office politics with confidence. This course provides strategies for building positive relationships, managing conflicts, and advancing your career while maintaining integrity.',
					fomoQuestion:
						'Feeling stuck in office politics? Learn how to navigate them effectively and advance your career!'
				},
				{
					name: 'Respect in the Workplace',
					overview:
						'Foster a culture of respect and inclusivity in your workplace. Learn strategies to promote mutual understanding, effective communication, and conflict resolution.',
					fomoQuestion:
						'Want to create a more harmonious work environment? This course will show you how to build respect among team members!'
				},
				{
					name: 'Recognizing Employee Excellence',
					overview:
						'Learn effective strategies to recognize and reward employee excellence, boosting morale, productivity, and retention in your organization.',
					fomoQuestion:
						'Are your top performers feeling undervalued? This course will show you how to keep them motivated and engaged!'
				},
				{
					name: 'Responsibility in the Workplace',
					overview:
						'Cultivating responsibility among employees is essential for organizational success. This course will define the traits of responsible employees and highlight the impact of responsibility on workplace dynamics.',
					fomoQuestion:
						'Ready to foster a culture of responsibility in your workplace? Join us to discover the traits and techniques that lead to success!'
				},
				{
					name: 'Safety in the Workplace',
					overview:
						'Creating a safe work environment is a shared responsibility. This course will equip you with the knowledge to identify common hazards and implement effective safety protocols.',
					fomoQuestion:
						'Want to ensure a safer workplace for everyone? Learn how to identify hazards and promote safety standards effectively!'
				},
				{
					name: 'Sensitivity Training',
					overview:
						'Creating an inclusive and safe workplace starts with understanding individual behaviors and emotions. This course promotes sensitivity and outlines steps for addressing non-compliance with policies.',
					fomoQuestion:
						"Ready to cultivate a more inclusive workplace? Join us to learn how sensitivity can transform your team's dynamics!"
				},
				{
					name: 'Social Media in the Workplace',
					overview:
						"Navigating the impact of social media on productivity is essential in today's digital age. This course will teach you how to communicate effectively through social platforms while maintaining professionalism.",
					fomoQuestion:
						'Want to harness the power of social media for your business? Learn how to communicate effectively and keep productivity high!'
				},
				{
					name: 'Supervising Others',
					overview:
						'Supervising is a balancing act between managing your own tasks and supporting your team. This course will equip you with essential skills for delegation, goal-setting, conflict resolution, and providing feedback.',
					fomoQuestion:
						'Ready to enhance your supervisory skills? Join us to learn how to lead your team more effectively!'
				},
				{
					name: 'Team Building for Managers',
					overview:
						'Strong teams drive success in any organization. This course will explore the essential elements of effective teamwork and provide practical activities to build camaraderie and problem-solving skills.',
					fomoQuestion:
						"Want to elevate your team's performance? Discover the strategies to build a cohesive and high-performing team!"
				},
				{
					name: 'Team Building Through Chemistry',
					overview:
						'Successful teams rely on chemistry among members. This course will help you understand the dynamics of team chemistry and how to foster connections that enhance collaboration.',
					fomoQuestion:
						"Want to create a team that clicks? Join us to learn how chemistry can drive your team's success!"
				},
				{
					name: 'Time Management',
					overview:
						'Mastering time management is crucial for reducing stress and boosting productivity. This course covers strategies for effective prioritization, delegation, and organization.',
					fomoQuestion:
						'Ready to take charge of your time? Discover powerful strategies to enhance your productivity today!'
				},
				{
					name: 'Trade Show Staff Training',
					overview:
						'Preparation is key for a successful trade show. Equip your team with the skills they need to represent your company effectively. This course will cover essential training to ensure your staff makes a strong impression on attendees.',
					fomoQuestion:
						'Want to maximize your trade show success? Get your team trained to shine and attract leads!'
				},
				{
					name: 'Trust Building and Resilience',
					overview:
						'Building trust is essential for a healthy workplace. This course provides tools to foster honesty and resilience among employees. Create a safe and supportive environment where everyone feels valued.',
					fomoQuestion:
						'Ready to strengthen trust within your organization? Join us to learn how trust and resilience can transform your workplace!'
				},
				{
					name: 'Unconscious Bias',
					overview:
						'Unconscious biases influence our decisions daily, often without us realizing it. This course explores the nature of these biases, their impact on workplace culture, and how to implement effective training programs to mitigate their effects.',
					fomoQuestion:
						'Curious about how your biases shape your decisions? Join us to uncover and address unconscious bias in your organization!'
				},
				{
					name: 'Universal Safety Practices',
					overview:
						"Safety is paramount in any workplace. This course emphasizes the importance of universal safety practices to protect employees and the company's financial health. Learn how to foster a safe environment and engage your workforce in safety initiatives.",
					fomoQuestion:
						'Want to safeguard your workplace and boost employee engagement? Discover essential safety practices today!'
				},
				{
					name: 'Virtual Team Building and Management',
					overview:
						'Learn effective strategies for building and managing virtual teams. This course covers communication tools, team-building activities, and management techniques tailored for remote work environments.',
					fomoQuestion:
						'Is your virtual team struggling to connect? Discover how to build a cohesive and productive remote team!'
				},
				{
					name: 'Women in Leadership',
					overview:
						'Empower women in leadership roles with strategies to overcome unique challenges, build confidence, and inspire others. Learn effective communication and networking techniques tailored for women leaders.',
					fomoQuestion:
						'Ready to break through the glass ceiling? Join us to discover how to thrive as a woman in leadership!'
				},
				{
					name: 'Workplace Bullying',
					overview:
						"Creating a safe workplace involves addressing bullying. This course covers your company's responsibilities in preventing bullying, recognizing its effects, and the appropriate steps to take when bullying occurs.",
					fomoQuestion:
						'Ready to stand against workplace bullying? Join us to learn how to create a safe and inclusive workplace!'
				},
				{
					name: 'Workplace Diversity',
					overview:
						'Diversity is crucial for thriving businesses. This course teaches strategies to promote diversity, remove barriers, and enhance communication. Learn active listening techniques and effective complaint resolution skills to foster an inclusive environment.',
					fomoQuestion:
						'Want to enhance diversity in your workplace? Discover how to build a more inclusive and dynamic environment today!'
				},
				{
					name: 'Workplace Violence',
					overview:
						'Preventing workplace violence is essential for employee safety. This course helps identify potential threats and provides coping strategies and response tools. Learn to recognize warning signs and create a safer workplace for everyone.',
					fomoQuestion:
						'Concerned about workplace safety? Join us to learn how to identify and prevent violence in your organization!'
				}
			]
		}
	];

</script>

<div class="min-h-screen bg-white">
	<div class="container mx-auto px-4 py-16">
		<h1 class="mb-8 font-playfair text-4xl text-brand-burgundy md:text-5xl">
			L-2 or Level-2 Corporate Training Program (Manager's)
		</h1>
		<p class="text-brand-dark mb-12 font-bricolage text-xl">
			Enhance your managerial skills and leadership capabilities with our comprehensive Manager's
			Training Program.
		</p>
    {#each NewCourseCategories as category}
    <section class="mb-16" transition:fade>
      <h2 class="mb-6 font-playfair text-3xl text-brand-burgundy">{category.name}</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each category.courses as course}
          <button
            class="border-brand-gold border rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg"
            on:click={() => {
              selectedCourse = course;
              dialogOpen = true;
            }}
          >
            {course.name}
          </button>
        {/each}
      </div>
    </section>
  {/each}
</div>
</div>
<CourseRegistrationForm {form} />

<Dialog.Root bind:open={dialogOpen}>
<Dialog.Content>
  <Dialog.Header>
    <Dialog.Title class="text-2xl text-brand-burgundy">{selectedCourse.name}</Dialog.Title>
    <Dialog.Description>Course information and enrollment options</Dialog.Description>
  </Dialog.Header>

  <div class="py-4">
    <!-- <h3 class="mb-2 font-bold">FOMO Question</h3> -->
    <p class="font-bold text-center">{selectedCourse.fomoQuestion}</p>

    <h3 class="mb-2 mt-4 font-bold text-brand-burgundy">Course Overview</h3>
    <p>{selectedCourse.overview}</p>
  </div>

  <Dialog.Footer>
    <a href="#course-enroll">
    <button on:click={() => {dialogOpen = false;}} class="rounded w-full bg-brand-burgundy px-4 py-2 text-white self-stretch">
      Enroll Now
    </button>
  </a>
  </Dialog.Footer>
</Dialog.Content>
</Dialog.Root>

