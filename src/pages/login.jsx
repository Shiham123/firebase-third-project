import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/useContext';

const LoginPage = () => {
  const context = useContext(AppContext);
  const { signWithEmailPassword } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = event.target.email.value;
    const passwordValue = event.target.password.value;

    signWithEmailPassword(emailValue, passwordValue)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center mt-28">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Login
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" name="email" />
            <Input label="Password" size="lg" name="password" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type="submit">
              Login
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              not have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                <Link to="/register">Register</Link>
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default LoginPage;
