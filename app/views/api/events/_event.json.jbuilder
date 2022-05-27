json.extract! event, :id, :title, :description, :date, :start_time, :end_time, :creator_id, :price, :address
json.photoUrl url_for(event.photo)