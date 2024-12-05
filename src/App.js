// import logo from './logo.svg';
import { Box, Heading, VStack, Stack, Center } from '@chakra-ui/layout';
import './App.css';
import { Card, CardBody, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    contact: '',
    subject: '',
    resume: '',
    url: '',
    about: ''

  })

  const handleChanges = (e) => {
    // setValues({values, [e.target.name]:[e.target.value]})
    setValues(prev => {
      return { ...prev, [e.target.name]: [e.target.value] }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('url', values)
    console.log(values);
  }

  const ResetFun = () => {
    setValues({ firstname: '', lastname: '', email: '' })
  }

  return (


    <Box bg={'wheat'} h={"100vh"} justifyContent={"center"} alignItems={"center"} >
      <Center>
        <Stack spacing={'4'}>
          <VStack>
            <Heading as={'h1'} fontSize={'24px'} fontWeight={'300'} letterSpacing={'-0.5px'}>React Form </Heading>
          </VStack>
          <Card bg={'#f6f8fa'} variant={'outline'} borderColor={'black'} minH={'600px'} w={'500px'}>
            <CardBody border={'green'}>
              <form onSubmit={handleSubmit}>
                <Stack>
                  <FormControl>
                    <FormLabel size={'sm'} >First Name</FormLabel>
                    <Input variant={"unstyled"} type='text' bg='white' size={'300px'} borderColor='#d8dee4' borderRadius='6px '
                      onChange={(e) => handleChanges(e)} name='firstname' required value={values.firstname} />
                  </FormControl>


                  <FormControl>
                    <FormLabel size={'sm'} >Last Name</FormLabel>
                    <Input variant={"unstyled"} type='text' bg='white' size={'300px'} borderColor='#d8dee4' borderRadius='6px '
                      onChange={(e) => handleChanges(e)} name='lastname' required value={values.lastname} />
                  </FormControl>


                  <FormControl>
                    <FormLabel size={'sm'} >Enter email</FormLabel>
                  </FormControl>
                  <Input variant={"unstyled"} type='text' bg='white' size={'300px'} borderColor='#d8dee4' borderRedius='6px '
                    onChange={(e) => handleChanges(e)} name='email' required value={values.email} />

                  <FormControl>
                    <FormLabel size={'sm'} >Contact</FormLabel>
                  </FormControl>
                  <Input variant={"unstyled"} type='number' bg='white' size={'300px'} borderColor='#d8dee4' borderRedius='6px '
                    onChange={(e) => handleChanges(e)} required />

                  <FormControl>
                    <FormLabel size={'sm'} alignItems={'center'} display={'flex'}  >Gender</FormLabel>
                    <input type='radio' name='gender'
                      onChange={(e) => handleChanges(e)} /> Male
                    <input type='radio' name='gender'
                      onChange={(e) => handleChanges(e)} /> fmale
                    <input type='radio' name='gender'
                      onChange={(e) => handleChanges(e)} /> other
                  </FormControl>


                  <FormControl>
                    <FormLabel size={'sm'} >Subject</FormLabel>
                  </FormControl>
                  <select name='subject' id='subject'
                    onChange={(e) => handleChanges(e)}>
                    <option value="math">Math</option>
                    <option value="physic">Physic</option>
                    <option value="English">English</option>
                  </select>


                  <FormControl>
                    <FormLabel size={'sm'} >Resume</FormLabel>
                  </FormControl>
                  <input type='file' placeholder='Select Resume' name='resume'
                    onChange={(e) => handleChanges(e)} />


                  <FormControl>
                    <FormLabel size={'sm'} >URL</FormLabel>
                  </FormControl>
                  <input type='text' name='url' placeholder='Enter Image URL'
                    onChange={(e) => handleChanges(e)} />

                  <FormControl>
                    <FormLabel size={'sm'} >About</FormLabel>
                  </FormControl>
                  <textarea name='about' id='about' cols="20" rows="5"
                    onChange={(e) => handleChanges(e)} placeholder='Enter description'></textarea>

                  <button type='button' onClick={ResetFun}>Reset</button>
                  <button type='submit'>Submit</button>

                </Stack>
              </form>
            </CardBody>
          </Card>
        </Stack>
      </Center>
    </Box>
  );
}

export default App;
