module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c6958cdce8cdb19cbfe5c5b3f4b79bb6'),
  },
});
