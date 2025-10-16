import { Link } from "react-router-dom";
import Card from "../Card";
import styles from "./index.module.css";

const CardContainer = () => {
  return (
    <div className={styles.card_wrapper}>
      <Link to="/test?c=aptitute">
        <Card className='card_style'
          name={"Aptitute"}
          imageUrl={
            "https://media.istockphoto.com/id/1393379238/photo/work-performance-is-influenced-by-skills-abilities-and-competence-the-concept-of-the.jpg?s=612x612&w=0&k=20&c=JmF3ow_Nn1jLVsjVWSmrCgBpJhJ3FnxX2rVIxWlO68Q="
          }
        />
      </Link>
      <Link to="/test?c=softskills">
        <Card
          name={"Soft Skill"}
          imageUrl={
            "https://media.istockphoto.com/id/1646526117/photo/concept-of-soft-skills-talent-job-hiring-and-career-search-for-self-motivation-development.jpg?s=612x612&w=0&k=20&c=8Gpc0iEBtAKmoLQpSvIWqTYeVUZcB99BnAejmI6PT7k="
          }
        />
      </Link>
      <Link to="/test?c=cs">
        <Card
          name={"CS Fundamentals"}
          imageUrl={
            "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fx8igqsckpqq7cqu5le9q.jpeg"
          }
        />
      </Link>
      <Link to="/test?c=programming">
        <Card
          name={"Programming"}
          imageUrl={
            "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww"
          }
        />
      </Link>
      <Link to="/test?c=aptitute">
        <Card
          name={"Voice Analysis"}
          imageUrl={
            "https://www.shutterstock.com/image-photo/voice-recording-man-touching-microphone-600nw-2422361483.jpg"
          }
        />
      </Link>
    </div>
  );
};

export default CardContainer;
