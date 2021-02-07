const Error = ({retry}) => {
  return (
    <div className='Error'>
        <p  className='ErrorText'>Произошла ошибка!!!</p>
        <button
         className='Btn ErrorBtn'
         type='button'
           onClick={retry}
          >
            Повторить
          </button>
    </div>
  )
}

export default Error;