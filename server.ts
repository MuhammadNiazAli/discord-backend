import app from './src/app'

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`server is running on https://localhost:${PORT}`)
});