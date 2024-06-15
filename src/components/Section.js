import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.div)`
  position: relative; /* Ensure it can contain absolutely positioned elements */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 60px; /* Offset for fixed navbar */
  box-sizing: border-box;
  padding: 0 20px; /* Add padding to the sides */
`;
