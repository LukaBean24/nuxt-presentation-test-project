<template>
  <p class="text-primary text-3xl">About Us</p>
  <br /><br />
  <p class="text-dark text-lg text-justify">
    Welcome to EduHub! <br />
    At EduHub, we believe that education is a lifelong journey that should be
    accessible to everyone, regardless of their location or circumstances.
    That's why we've created an innovative e-learning platform designed to
    empower individuals to learn, grow, and thrive. With our user-friendly
    interface and extensive library of courses, we provide a seamless learning
    experience tailored to your needs and interests. Whether you're a student, a
    professional seeking to upskill, or simply someone with a passion for
    knowledge, EduHub has something for you. Our team of expert educators and
    industry professionals have carefully curated a diverse range of courses
    across various subjects. From academic subjects to practical skills, from
    arts and humanities to cutting-edge technologies, we've got you covered. You
    can explore topics at your own pace, dive deep into specific areas of
    interest, and acquire valuable knowledge that will enrich your personal and
    professional life. One of the key advantages of EduHub is its flexibility.
    We understand that life can be busy, and traditional education doesn't
    always fit into everyone's schedule. With our app, you have the freedom to
    learn whenever and wherever you want. Whether you prefer to study in short
    bursts during your daily commute or immerse yourself in lengthy study
    sessions at home, the choice is yours. Engaging and interactive content is
    at the heart of our learning experience. Our courses incorporate multimedia
    elements, quizzes, and practical exercises to ensure that you truly grasp
    the concepts and can apply them in real-world scenarios. You'll have access
    to a supportive community of fellow learners, where you can collaborate,
    discuss ideas, and seek guidance from experts. Your learning journey doesn't
    end with the completion of a course. [App Name] offers certificates of
    achievement to recognize your accomplishments and showcase your new skills
    to employers and peers. We are committed to your long-term success and will
    continue to expand our course offerings to keep pace with emerging trends
    and evolving industries. Join us at EduHub and embark on an exciting
    educational adventure. Unleash your potential, broaden your horizons, and
    unlock a world of opportunities. Start your learning journey today! Welcome
    to the future of education. <br />
    EduHub Team
  </p>
</template>

<script setup>
const user = useSupabaseUser();
definePageMeta({
  layout: "guest",
});
useHead({
  title: "EduHub || About",
});
</script>
