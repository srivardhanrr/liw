<!-- src/routes/courses/cxo/+page.svelte -->
<script>
	import CourseRegistrationForm from '$lib/components/sections/courses/CourseRegistrationForm.svelte';
  import { fade } from 'svelte/transition';

  const courseCategories = [
    {
      name: "Leadership and Management",
      courses: [
        "Budgets and Financial Reports",
        "Coaching and Mentoring",
        "Conducting Annual Employee Reviews",
        "Crisis Management",
        "Developing New Managers",
        "Developing Emotional Intelligence",
        "Employee Motivation",
        "Knowledge Management",
        "Leadership and Influence",
        "Lean Six Sigma",
        "Manager Management",
        "Performance Management",
        "Project Management",
        "Self-Leadership",
        "Servant Leadership"
      ]
    },
    {
      name: "Personal Development",
      courses: [
        "Attention Management",
        "Being a Likeable Boss",
        "Critical Thinking",
        "Emotional Intelligence",
        "Goal Setting and Getting Things Done",
        "Improving Mindfulness",
        "Improving Self-Awareness",
        "Managing Workplace Anxiety",
        "Personal Productivity",
        "Public Speaking",
        "Stress Management",
        "Work-Life Balance"
      ]
    },
    {
      name: "Marketing and Sales",
      courses: [
        "Coaching Salespeople",
        "High Performance Teams Inside the Company",
        "High Performance Teams Remote Workforce",
        "In Person Sales",
        "Internet Marketing Fundamentals",
        "Motivating Your Sales Team",
        "Presentation Skills",
        "Prospecting and Lead Generation"
      ]
    },
    {
      name: "Human Resources",
      courses: [
        "Business Succession Planning",
        "Diversity, Equity, and Inclusion",
        "Employee Onboarding",
        "Employee Recruitment",
        "Employee Termination Processes",
        "Generation Gaps",
        "Health and Wellness at Work",
        "Hiring Strategies",
        "Measuring Results From Training",
        "Millennial Onboarding",
        "Talent Management",
        "Train-The-Trainer",
        "Workplace Harassment"
      ]
    },
    {
      name: "Organizational Essentials",
      courses: [
        "Appreciative Inquiry",
        "Business Acumen",
        "Business Ethics",
        "Business Etiquette",
        "Change Management",
        "Conflict Resolution",
        "Customer Service",
        "Customer Support",
        "Delivering Constructive Criticism",
        "Developing Corporate Behavior",
        "Handling a Difficult Customer/Parent",
        "Networking Within the Company",
        "Risk Assessment and Management",
        "Teamwork and Team Building"
      ]
    },
    {
      name: "Administrative Skills",
      courses: [
        "Administrative Office Procedures",
        "Administrative Support",
        "Archiving and Records Management",
        "Business Writing",
        "Collaborative Business Writing",
        "Creating a Great Webinar",
        "Employee Recognition",
        "Organizational Skills",
        "Social Media in the Workplace",
        "Supply Chain Management"
      ]
    },
    {
      name: "Professional Advancement",
      courses: [
        "Assertiveness and Self-Confidence",
        "Body Language Basics",
        "Communication Strategies",
        "Creative Problem Solving",
        "Developing Creativity",
        "Digital Citizenship",
        "Interpersonal Skills",
        "mLearning Essentials",
        "Negotiation Skills",
        "Personal Branding",
        "Project Management",
        "Ten Soft Skills You Need",
        "The Cloud and Business"
      ]
    },
    {
      name: "Advanced Career Building",
      courses: [
        "Accountability in the Workplace",
        "Adult Learning – Physical Skills",
        "Anger Management",
        "Building Confidence and Assertiveness",
        "Civility in the Workplace",
        "Collaborative Business Writing",
        "Contact Center Training",
        "Creativity: Thinking Outside the Box",
        "Developing a Lunch and Learn",
        "Developing Emotional Intelligence",
        "Diversity and Inclusion",
        "Emotional Intelligence at Work",
        "Event Planning",
        "Increasing Your Happiness",
        "Leadership Development for Women",
        "Life Coaching Essentials",
        "Managing Personal Finances",
        "Managing Workplace Harassment",
        "Office Health and Safety",
        "Office Politics for Managers",
        "Respect in the Workplace",
        "Recognizing Employee Excellence",
        "Responsibility in the Workplace",
        "Safety in the Workplace",
        "Sensitivity Training",
        "Social Media in the Workplace",
        "Supervising Others",
        "Team Building for Managers",
        "Team Building Through Chemistry",
        "Time Management",
        "Trade Show Staff Training",
        "Trust Building and Resilience",
        "Unconscious Bias",
        "Universal Safety Practices",
        "Virtual Team Building and Management",
        "Women in Leadership",
        "Workplace Bullying",
        "Workplace Diversity",
        "Workplace Violence"
      ]
    }
  ];
</script>

<div class="bg-white min-h-screen">
  <div class="container mx-auto px-4 py-16">
    <h1 class="font-playfair text-4xl md:text-5xl text-brand-burgundy mb-8">L-1 or Level-1 Corporate Training Program (CXO)</h1>
    <p class="font-bricolage text-xl text-brand-dark mb-12">Elevate your executive leadership skills with our comprehensive CXO-level training program.</p>
    
    {#each courseCategories as category}
      <section class="mb-16" transition:fade>
        <h2 class="font-playfair text-3xl text-brand-burgundy mb-6">{category.name}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each category.courses as course}
            <div class="bg-white border border-brand-gold rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 class="font-bricolage text-lg text-brand-yellow">{course}</h3>
            </div>
          {/each}
        </div>
      </section>
    {/each}
  </div>
</div>
<CourseRegistrationForm />
