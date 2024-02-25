class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  userSearch() {
    if (this.queryStr.keyword) {
      const keyword = {
        $or: [
          { firstName: { $regex: this.queryStr.keyword, $options: "i" } },
          { lastName: { $regex: this.queryStr.keyword, $options: "i" } },
          { email: { $regex: this.queryStr.keyword, $options: "i" } },
        ],
      };
      this.query = this.query.find({ ...keyword });
    }
    return this;
  }

  propertySearch() {
    let locationQuery = {};
    let sizeQuery = {};
    let amenityQuery = {};

    if (this.queryStr.locations) {
      const locations = this.queryStr.locations.split(",");
      locationQuery = { "address.location": { $in: locations } };
    }

    if (this.queryStr.sizes) {
      const sizes = this.queryStr.sizes.split(",").map(Number);
      sizeQuery = { "size.ft": { $in: sizes } };
    }

    if (this.queryStr.amenities) {
      const amenities = this.queryStr.sizes.split(",");
      amenityQuery = { amenity: { $in: amenities } };
    }

    this.query = this.query.find({
      ...locationQuery,
      ...sizeQuery,
      ...amenities,
    });

    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    //removing some field for category for url
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => {
      delete queryCopy[key];
    });

    //filer for price
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = ApiFeatures;
