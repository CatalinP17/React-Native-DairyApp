import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization:
      'Bearer Oulmink8tVpWizyjtU_yBkpy8WeW_J75kzBQn5JWvm_3aK2UPF4JaIeRNthgNkzSlrpk1FCHZJLm3QO066icvTtRIhLOI1mtTrSDMYJEVEJ8FMXQOdAaw2yPsPW7YXYx',
  },
})
