<!-- src/routes/courses/teacher/+page.svelte -->
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
					name: 'Attention Management',
					overview:
						'Boost productivity and reduce mistakes with our Attention Management course. Learn strategies to enhance focus, enabling you to connect emotionally with your team and meet both personal and organizational goals.',
					fomoQuestion:
						'Are distractions holding you back from peak performance? Master the art of attention management and transform your effectiveness!'
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
					name: 'Social Intelligence',
					overview:
						'Enhance your interactions with our Social Intelligence course. Learn to read social cues, express yourself effectively, and build meaningful connections to boost your influence in both personal and professional environments.',
					fomoQuestion:
						'Struggling to connect with others or influence your peers? Elevate your social skills and navigate interactions like a pro!'
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
					name: 'Taking Initiative',
					overview:
						'Step into your potential with our Taking Initiative course. Learn the importance of being proactive, embrace opportunities, and build your self-esteem. This course empowers you to identify and act on opportunities, turning aspirations into achievements.',
					fomoQuestion:
						"Are you waiting for opportunities to come to you? It's time to take charge and make things happen! Join us to unleash your potential!"
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
					name: 'Presentation Skills',
					overview:
						'Conquer the fear of public speaking with our Presentation Skills Online Course. Equip yourself with essential skills to deliver compelling presentations, engage your audience, and make your message memorable. Learn how to create impactful content and utilize visual aids effectively.',
					fomoQuestion:
						"Want to shine in your next presentation? Don't miss out on the chance to enhance your speaking skills—enroll in our Presentation Skills Online Course today and make every presentation count!"
				}
			]
		},
		{
			name: 'Human Resources',
			courses: [
				{
					name: 'Generation Gaps',
					overview:
						"Today's workforce is a blend of diverse generations, each bringing unique perspectives and experiences. Our Generation Gaps course helps you understand and embrace these differences, turning potential conflicts into opportunities for growth. By recognizing the strengths of both younger and older employees, you'll learn how to foster collaboration and enhance workplace dynamics for overall organizational success.",
					fomoQuestion:
						'Are you missing out on the strengths of a multigenerational workforce? Join our Generation Gaps course and unlock the potential of diverse perspectives to create a thriving workplace culture!'
				},
				{
					name: 'Health and Wellness at Work',
					overview:
						'Promote a healthier workplace with our Health and Wellness at Work course. Learn strategies to create a work environment that supports physical and mental well-being, leading to increased productivity and job satisfaction.',
					fomoQuestion:
						'Is your workplace supporting the health and wellness of your employees? Discover how to create a thriving, healthy work environment with this essential course!'
				},
				{
					name: 'Measuring Results From Training',
					overview:
						'Understanding the impact of training can be challenging, especially when it comes to quantifying its benefits. Our Measuring Results from Training course empowers you to evaluate training effectiveness through various methods. Learn how to demonstrate the value of training—both tangible and intangible—so you can continuously improve your programs for better outcomes.',
					fomoQuestion:
						'Ready to unlock the true value of your training programs? Join our Measuring Results from Training course and learn how to prove their worth to your organization!'
				},
				{
					name: 'Talent Management',
					overview:
						'Talent is your most valuable asset, and effective management is key to maximizing its potential. Our Talent Management course guides you in developing a skilled workforce while attracting top talent. Learn how to reduce training costs and retain the best employees, ensuring your organization thrives through better performance and productivity.',
					fomoQuestion:
						'Is your company ready to harness the full potential of its talent? Enroll in our Talent Management course and start investing in your workforce for lasting success!'
				},
				{
					name: 'Train-The-Trainer',
					overview:
						"Becoming an effective trainer requires more than just subject knowledge. It's about mastering the art of engaging others and delivering impactful learning experiences. Our Train-the-Trainer course equips participants with essential skills, including facilitation techniques, needs analysis, and managing challenging topics, ensuring they can lead compelling workshops with confidence.",
					fomoQuestion:
						'Ready to inspire and lead through effective training? Join our Train-the-Trainer course and unlock the skills to deliver unforgettable workshops!'
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
					name: 'Business Etiquette',
					overview:
						'Master the art of professional conduct with our Business Etiquette course. Learn essential skills for navigating workplace interactions, from meetings to networking events, ensuring you always make a positive impression.',
					fomoQuestion:
						'Are you unknowingly making etiquette mistakes that could be holding back your career? Elevate your professional image with our Business Etiquette course!'
				},
				{
					name: 'Delivering Constructive Criticism',
					overview:
						'Delivering feedback can be tricky, but when done effectively, constructive criticism drives personal and professional growth. This course teaches you how to provide feedback in a way that improves employee performance and strengthens relationships. Learn how to handle sensitive situations tactfully and create an environment where feedback fosters development rather than resentment.',
					fomoQuestion:
						'Struggling to give feedback that actually helps? Join our Delivering Constructive Criticism course and turn every conversation into an opportunity for growth!'
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
					name: 'Office Health and Safety',
					overview:
						'Promote a healthier workplace with our Office Health and Safety course. Gain essential knowledge about illness prevention, symptom recognition, and emergency response to keep your team thriving.',
					fomoQuestion:
						'Concerned about workplace health? This course will equip you with the skills to create a safer environment!'
				},
				{
					name: 'Respect in the Workplace',
					overview:
						'Foster a culture of respect and inclusivity in your workplace. Learn strategies to promote mutual understanding, effective communication, and conflict resolution.',
					fomoQuestion:
						'Want to create a more harmonious work environment? This course will show you how to build respect among team members!'
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
					name: 'Time Management',
					overview:
						'Mastering time management is crucial for reducing stress and boosting productivity. This course covers strategies for effective prioritization, delegation, and organization.',
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
			Teacher Training Program
		</h1>
		<p class="text-brand-dark mb-12 font-bricolage text-xl">
			Enhance your teaching skills and professional development with our comprehensive Teacher
			Training Program.
		</p>

		{#each NewCourseCategories as category}
			<section class="mb-16" transition:fade>
				<h2 class="mb-6 font-playfair text-3xl text-brand-burgundy">{category.name}</h2>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each category.courses as course}
						<button
							class="rounded-lg border border-brand-gold p-4 shadow-md transition-all duration-300 hover:shadow-lg"
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
			<p class="text-center font-bold">{selectedCourse.fomoQuestion}</p>

			<h3 class="mb-2 mt-4 font-bold text-brand-burgundy">Course Overview</h3>
			<p>{selectedCourse.overview}</p>
		</div>

		<Dialog.Footer>
			<a href="#course-enroll">
				<button
					on:click={() => {
						dialogOpen = false;
					}}
					class="w-full self-stretch rounded bg-brand-burgundy px-4 py-2 text-white"
				>
					Enroll Now
				</button>
			</a>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
