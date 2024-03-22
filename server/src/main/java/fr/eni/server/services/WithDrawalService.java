package fr.eni.server.services;

import fr.eni.server.bo.Withdrawal;
import fr.eni.server.dal.WithdrawalDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WithDrawalService implements IService<Withdrawal> {

    @Autowired
    private WithdrawalDao withdrawalDao;
    @Override
    public void createNew(Withdrawal obj) {

    }

    @Override
    public void deleteOne(long id) {

    }

    @Override
    public Withdrawal getOne(long Id) {
        return withdrawalDao.getById(Id);
    }

    @Override
    public void update(Withdrawal obj) {

    }

    @Override
    public List<Withdrawal> getAll() {
        return null;
    }
}
