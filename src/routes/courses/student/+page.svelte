<!-- src/routes/courses/student/+page.svelte -->
<script>
	import CourseRegistrationForm from '$lib/components/sections/courses/CourseRegistrationForm.svelte';
	import { fade } from 'svelte/transition';

  import * as Dialog from '$lib/components/ui/dialog';


let dialogOpen = false;
let selectedCourse = null;


	export let form;

	const newCourseCategories = [
		{
			name: 'Leadership and Management',
			courses: [
				{
					name: 'Budgets and Financial Reports',
					overview:
						'Gain a solid foundation in finance with our Budgets and Financial Reports course. Learn essential terms, how to interpret financial statements, and effective budgeting techniques.',
					fomoQuestion:
						'Feeling lost during financial discussions at work? This course is your key to mastering financial literacy!'
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
					name: 'Leadership and Influence',
					overview:
						'Develop your innate leadership abilities with our Leadership and Influence course. Gain the confidence and skills needed to lead effectively, turning challenges into opportunities for growth.',
					fomoQuestion:
						'Ready to step into a leadership role but unsure how? This course will guide you on your journey to becoming an influential leader!'
				},
				{
					name: 'Self-Leadership',
					overview:
						'Unlock your potential with our Self-Leadership course. Learn to motivate and guide yourself effectively, paving the way for success in both your personal and professional life.',
					fomoQuestion:
						'Are you struggling to lead yourself effectively? Discover the keys to self-motivation and become a more impactful leader!'
				}
			]
		},
		{
			name: 'Personal Development',
			courses: [
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
					name: 'Social Intelligence',
					overview:
						'Enhance your interactions with our Social Intelligence course. Learn to read social cues, express yourself effectively, and build meaningful connections to boost your influence in both personal and professional environments.',
					fomoQuestion:
						'Struggling to connect with others or influence your peers? Elevate your social skills and navigate interactions like a pro!'
				},
				{
					name: 'Stress Management',
					overview:
						'Master the art of managing stress with our Stress Management course. Learn to differentiate between positive and negative stress and apply the Triple A approach to tackle any challenging situation. Equip yourself with relaxation techniques, routines, and a stress log system to create a healthier lifestyle.',
					fomoQuestion:
						"Feeling overwhelmed by stress? Discover how to transform pressure into productivity—don't miss out on mastering stress management!"
				},
				{
					name: 'Taking Initiative',
					overview:
						'Step into your potential with our Taking Initiative course. Learn the importance of being proactive, embrace opportunities, and build your self-esteem. This course empowers you to identify and act on opportunities, turning aspirations into achievements.',
					fomoQuestion:
						"Are you waiting for opportunities to come to you? It's time to take charge and make things happen! Join us to unleash your potential!"
				}
			]
		},
		{
			name: 'Marketing and Sales',
			courses: [
				{
					name: 'Internet Marketing Fundamentals',
					overview:
						'Navigate the evolving landscape of marketing with our Internet Marketing Fundamentals course. Discover the tools and strategies needed to effectively communicate and engage with your audience online. Learn how to harness the power of social media and create compelling content that captures attention and drives results.',
					fomoQuestion:
						'Is your online marketing strategy keeping up with the times? Join us to unlock the secrets of successful internet marketing and stay ahead of the competition—enroll now!'
				},
				{
					name: 'Marketing Basics',
					overview:
						"Unlock the potential of your business with our Marketing Basics course. Marketing is more than just promotion; it's the foundation for growth and success. This course provides an essential introduction to marketing principles, equipping you with the knowledge to enhance your strategies and drive business growth, no matter your industry.",
					fomoQuestion:
						"Ready to elevate your business? Don't miss out on the chance to understand the key to your success—enroll in Marketing Basics today and start building a brighter future!"
				},
				{
					name: 'Media and Public Relations',
					overview:
						'Master the art of communication with our Media and Public Relations course. Learn how to effectively manage your image, expand your network, and communicate your value through strategic planning. Gain practical skills that will empower you to engage with the media and enhance your public presence.',
					fomoQuestion:
						"Are you prepared to make your voice heard? Don't let opportunities pass you by—join us in the Media and Public Relations course to amplify your impact and grow your connections!"
				},
				{
					name: 'Overcoming Sales Objections',
					overview:
						'Transform objections into opportunities with our Overcoming Sales Objections course. Learn effective strategies to address and eliminate sales objections, turning potential rejections into successful sales. This course is vital for anyone looking to enhance their sales skills and build lasting relationships with clients.',
					fomoQuestion:
						'Are you ready to turn "no" into "yes"? Don\'t let objections hold you back—join our Overcoming Sales Objections course and discover the tools to elevate your sales game!'
				},
				{
					name: 'Presentation Skills',
					overview:
						'Conquer the fear of public speaking with our Presentation Skills Online Course. Equip yourself with essential skills to deliver compelling presentations, engage your audience, and make your message memorable. Learn how to create impactful content and utilize visual aids effectively.',
					fomoQuestion:
						"Want to shine in your next presentation? Don't miss out on the chance to enhance your speaking skills—enroll in our Presentation Skills Online Course today and make every presentation count!"
				},
				{
					name: 'Proposal Writing',
					overview:
						'Craft persuasive proposals that stand out with our Proposal Writing Course Online. Dive into the proposal writing process, from initial research to final edits, and learn how to create compelling content that resonates with your audience. Make your proposals the logical choice for decision-makers.',
					fomoQuestion:
						"Are your proposals getting the attention they deserve? Don't let your ideas go unnoticed—sign up for our Proposal Writing Course Online and master the art of persuasive writing!"
				},
				{
					name: 'Sales Fundamentals',
					overview: '',
					fomoQuestion: ''
				},
				{
					name: 'Social Media Marketing',
					overview:
						'Dive into the dynamic world of Social Media Marketing with our comprehensive course. Learn how to leverage social platforms to engage with customers and enhance your brand presence. Understand the risks and benefits of social media strategies to drive success in your marketing efforts.',
					fomoQuestion:
						"Is your brand missing out on the social media buzz? Don't let competitors steal the spotlight—sign up for our Social Media Marketing course and elevate your marketing game!"
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
					overview: '',
					fomoQuestion: ''
				}
			]
		},
		{
			name: 'Organizational Essentials',
			courses: [
				{
					name: 'Cyber Security',
					overview:
						"In an increasingly digital world, cyber security is no longer optional—it's essential. This course will provide you with a solid understanding of cyber threats like malware and data breaches, and teach you effective prevention strategies. Strengthen your organization's defenses, protect sensitive information, and boost productivity by staying one step ahead of cybercriminals.",
					fomoQuestion:
						'Is your company prepared for cyber threats? Enroll in our Cyber Security course and ensure your business stays secure in the digital age!'
				},
				{
					name: 'Developing Corporate Behavior',
					overview:
						"Corporate behavior is about more than just adhering to company policies; it's about fostering a culture of ethics, values, and respect. Our Developing Corporate Behavior course helps you align your organization's actions with these principles, creating a positive environment where trust and communication thrive. Participants will experience improved teamwork, reduced incidents, and a boost in loyalty and overall morale.",
					fomoQuestion:
						'Is your company culture strong enough to drive success? Join our Developing Corporate Behavior course and create a positive environment that sets you apart as a leader!'
				},
				{
					name: 'Handling a Difficult Customer/Parent',
					overview:
						"Dealing with challenging customers can be stressful, but it's an essential skill for maintaining high service standards. In our Handling a Difficult Customer course, you'll learn how to manage stress, build rapport, and use effective communication strategies to turn negative experiences into positive ones. Mastering these skills will not only reduce customer complaints but also lead to greater productivity and repeat business.",
					fomoQuestion:
						'Tired of difficult customers draining your energy? Join our Handling a Difficult Customer course and discover how to turn every interaction into a success!'
				},
				{
					name: 'Risk Assessment and Management',
					overview:
						"Risks are inevitable, but managing them effectively can prevent costly damage and harm. Our Risk Assessment and Management course teaches you to identify potential hazards, mitigate risks, and improve workplace safety. By adopting proper risk management practices, you'll protect your organization and its employees, making safety a top priority.",
					fomoQuestion:
						'Are you prepared for the unexpected? Join our Risk Assessment and Management course and learn how to safeguard your workplace from potential dangers!'
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
					name: 'Basic Bookkeeping',
					overview:
						'Numbers are everywhere—from price tags to bank accounts—and whether you love them or fear them, they play a critical role in our everyday lives. This Basic Bookkeeping course introduces you to the world of numbers in a fun and approachable way. Learn the fundamentals of managing financial records, making sense of balance sheets, and keeping track of essential data that help businesses thrive.',
					fomoQuestion:
						"Feeling lost when it comes to numbers? Don't let bookkeeping scare you—master the basics with our fun and easy Basic Bookkeeping course today!"
				},
				{
					name: 'Business Writing',
					overview:
						'Strong writing skills are essential in the business world, yet many people struggle with clarity and professionalism in their communication. The Business Writing course offers a refresher on core writing principles, such as spelling, grammar, and punctuation, while also guiding you through the creation of important business documents like proposals, reports, and emails. This course will help you refine your writing to stand out in any workplace setting.',
					fomoQuestion:
						'Is your writing holding you back at work? Upgrade your skills with our Business Writing course and impress everyone with professional communication!'
				},
				{
					name: 'Creating a Great Webinar',
					overview:
						'Learn how to promote, host, and engage audiences in impactful webinars to market products, train teams, or conduct meetings globally.',
					fomoQuestion:
						'Is your audience tuning out during your webinars? This course will change that!'
				},
				{
					name: 'Organizational Skills',
					overview:
						'Improve your productivity and management by learning essential organizational skills that benefit both your personal and professional life.',
					fomoQuestion:
						'Tired of wasting time searching for things? Get organized with this course!'
				},
				{
					name: 'Social Media in the Workplace',
					overview:
						'Learn how to use social media responsibly and effectively in the workplace, improving communication without sacrificing productivity.',
					fomoQuestion: 'Is social media distracting your team? This course will help balance it!'
				},
				{
					name: 'Supply Chain Management',
					overview:
						"Master the complexities of coordinating suppliers, producers, and customers to streamline operations and increase efficiency in today's global economy.",
					fomoQuestion:
						'Struggling to optimize your supply chain? This course can transform your process!'
				},
				{
					name: 'Telephone Etiquette',
					overview:
						'Enhance your phone skills to boost confidence, improve sales, and create better customer relationships, all while fostering a positive work environment.',
					fomoQuestion:
						'Are poor phone skills affecting your business? This course will sharpen them!'
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
					name: 'Entrepreneurship',
					overview:
						'Turn your business idea into reality by learning how to draft business plans, understand competition, and market successfully.',
					fomoQuestion:
						"Have a great idea but don't know where to start? This course will guide you!"
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
					name: 'Adult Learning – Mental Skills',
					overview:
						"Explore Bloom's Taxonomy's cognitive domain to boost intellectual capabilities and enhance adult education effectiveness.",
					fomoQuestion:
						'Want to improve your learning strategies? This course will elevate your mental skills!'
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
					name: 'Job Search Skills',
					overview:
						'Navigate the intimidating job market with confidence! This course equips you with essential strategies for crafting winning resumes, acing interviews, and finding job leads, setting you on the path to your ideal job within a month.',
					fomoQuestion:
						'Ready to kickstart your job search? This course will give you the roadmap to success!'
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
					name: 'Multi-Level Marketing',
					overview:
						"Unlock the potential of multi-level marketing (MLM) with this comprehensive course. Learn how to recruit, train, and motivate agents, maximizing your company's sales and networking capabilities.",
					fomoQuestion:
						'Curious about how MLM can boost your business? Join this course to explore effective strategies!'
				},
				{
					name: 'Office Health and Safety',
					overview:
						'Promote a healthier workplace with our Office Health and Safety course. Gain essential knowledge about illness prevention, symptom recognition, and emergency response to keep your team thriving.',
					fomoQuestion:
						'Concerned about workplace health? This course will equip you with the skills to create a safer environment!'
				},
				{
					name: 'Sensitivity Training',
					overview:
						"Creating an inclusive and safe workplace starts with understanding individual behaviors and emotions. This course promotes sensitivity and outlines steps for addressing non-compliance with policies. By fostering positive relationships, you'll enhance the overall work environment.",
					fomoQuestion:
						"Ready to cultivate a more inclusive workplace? Join us to learn how sensitivity can transform your team's dynamics!"
				},
				{
					name: 'Social Media in the Workplace',
					overview:
						"Navigating the impact of social media on productivity is essential in today's digital age. This course will teach you how to communicate effectively through social platforms while maintaining professionalism. Discover strategies for integrating social media into your workplace without sacrificing productivity.",
					fomoQuestion:
						'Want to harness the power of social media for your business? Learn how to communicate effectively and keep productivity high!'
				},
				{
					name: 'Time Management',
					overview:
						'Mastering time management is crucial for reducing stress and boosting productivity. This course covers strategies for effective prioritization, delegation, and organization. Learn to control your workload and focus on impactful tasks.',
					fomoQuestion:
						'Ready to take charge of your time? Discover powerful strategies to enhance your productivity today!'
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
					overview: '',
					fomoQuestion: ''
				},
				{
					name: 'Women in Leadership',
					overview: '',
					fomoQuestion: ''
				}
			]
		}
	];

</script>

<div class="min-h-screen bg-white">
	<div class="container mx-auto px-4 py-16">
		<h1 class="mb-8 font-playfair text-4xl text-brand-burgundy md:text-5xl">
			Student Training Program
		</h1>
		<p class="text-brand-dark mb-12 font-bricolage text-xl">
			Empower yourself with essential skills for academic and professional success through our
			comprehensive Student Training Program.
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
