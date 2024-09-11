<!-- src/routes/courses/executives/+page.svelte -->
<script>
	import CourseRegistrationForm from '$lib/components/sections/courses/CourseRegistrationForm.svelte';
  import { fade } from 'svelte/transition';

  const courseCategories = [
    {
      name: "Leadership and Management",
      courses: [
        "Crisis Management",
        "Developing Emotional Intelligence",
        "Knowledge Management",
        "Performance Management",
        "Self-Leadership"
      ]
    },
    {
      name: "Personal Development",
      courses: [
        "Critical Thinking",
        "Emotional Intelligence",
        "Goal Setting and Getting Things Done",
        "Improving Mindfulness",
        "Improving Self-Awareness",
        "Managing Workplace Anxiety",
        "Personal Productivity",
        "Public Speaking",
        "Social Intelligence",
        "Stress Management",
        "Taking Initiative",
        "Work-Life Balance"
      ]
    },
    {
      name: "Marketing and Sales",
      courses: [
        "In Person Sales",
        "Overcoming Sales Objections",
        "Presentation Skills",
        "Top 10 Sales Secrets"
      ]
    },
    {
      name: "Human Resources",
      courses: [
        "Contract Management",
        "Health and Wellness at Work",
        "Millennial Onboarding",
        "Talent Management",
        "Workplace Harassment"
      ]
    },
    {
      name: "Organizational Essentials",
      courses: [
        "Customer Service",
        "Networking Within the Company",
        "Teamwork and Team Building"
      ]
    },
    {
      name: "Administrative Skills",
      courses: [
        "Administrative Office Procedures",
        "Administrative Support",
        "Archiving and Records Management",
        "Executive and Personal Assistants",
        "Organizational Skills",
        "Telephone Etiquette"
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
        "Personal Branding",
        "Project Management",
        "Telework and Telecommuting",
        "Ten Soft Skills You Need"
      ]
    },
    {
      name: "Advanced Career Building",
      courses: [
        "Accountability in the Workplace",
        "Adult Learning – Physical Skills",
        "Anger Management",
        "Building Confidence and Assertiveness",
        "Call Center Training",
        "Civility in the Workplace",
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
        "Multi-Level Marketing",
        "Networking Outside the Company",
        "Office Health and Safety",
        "Office Politics for Managers",
        "Respect in the Workplace",
        "Responsibility in the Workplace",
        "Safety in the Workplace",
        "Sensitivity Training",
        "Social Media in the Workplace",
        "Supervising Others",
        "Team Building Through Chemistry",
        "Time Management",
        "Trust Building and Resilience",
        "Unconscious Bias",
        "Universal Safety Practices",
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
    <h1 class="font-playfair text-4xl md:text-5xl text-brand-burgundy mb-8">L-3 or Level-3 Corporate Training Program (Executives)</h1>
    <p class="font-bricolage text-xl text-brand-dark mb-12">Elevate your executive skills and leadership capabilities with our comprehensive Executive Training Program.</p>
    
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